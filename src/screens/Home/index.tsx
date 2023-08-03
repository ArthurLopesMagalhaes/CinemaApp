import { useCallback, useEffect, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Container, Content } from "./styles";

import { Divider } from "../../components/Divider";
import { Header } from "../../components/Header";
import { ModalAuth } from "../../components/ModalAuth";
import { Movie, MovieList } from "../../components/MovieList";
import { Text } from "../../components/Text";
import { supabase } from "../../services/supabase";
import { User } from "@supabase/supabase-js";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useUserStore } from "../../stores/user";
import { cineAPI } from "../../services/api";

export const Home = () => {
  const navigation = useNavigation();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [movies, setMovies] = useState<Movie[]>([]);

  const ModalRef = useRef<BottomSheet>(null);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.expand();
  };

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const checkUser = async () => {
    // Maybe don't need this after implement AsyncStorage
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser({ email: user?.email, role: user?.role } as User);
  };

  const getMovies = async () => {
    const data = await cineAPI.getMovies();
    if (data.movies) {
      setMovies(data.movies);
    }
  };

  useEffect(() => {
    checkUser();
    getMovies();
  }, []);

  return (
    <Container>
      <Header
        onButtonPress={
          user?.role === "authenticated"
            ? goToProfile
            : () => openModal(ModalRef)
        }
        userLogged={user?.role === "authenticated"}
      />
      <Content>
        <Text weight="Bold" size={24}>
          Now in cinemas
        </Text>
        <Divider top={16} />
        <MovieList data={movies} />
      </Content>
      <ModalAuth ref={ModalRef} />
    </Container>
  );
};
