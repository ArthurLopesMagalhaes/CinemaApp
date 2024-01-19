import { useCallback, useEffect, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Container, Content } from "./styles";

import { Divider } from "../../components/Divider";
import { Header } from "../../components/Header";

import { Movie, MovieList } from "../../components/MovieList";
import { Text } from "../../components/Text";
import { supabase } from "../../services/supabase";

import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { UserType, useUserStore } from "../../stores/user";
import { cineAPI } from "../../services/api";

export const Home = () => {
  const navigation = useNavigation();
  const user = useUserStore((state) => state.user);
  const setUser = useUserStore((state) => state.setUser);

  const [movies, setMovies] = useState<Movie[]>([]);

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const checkUser = async () => {
    // Maybe don't need this after implement AsyncStorage
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser({ email: user?.email, role: user?.role, id: user?.id } as UserType);
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
            : () => navigation.navigate("SignIn")
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
    </Container>
  );
};
