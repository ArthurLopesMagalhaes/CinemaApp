import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";

import { Divider } from "@components/Divider";
import { Header } from "@components/Header";
import { Movie, MovieList } from "@components/MovieList";
import { Text } from "@components/Text";

import { cineAPI } from "@services/api";
import { supabase } from "@services/supabase";

import { UserType, useUserStore } from "@stores/user";

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
