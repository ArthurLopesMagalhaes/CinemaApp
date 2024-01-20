import { useEffect, useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { Container, Content } from "./styles";

import { Divider } from "@components/Divider";
import { Header } from "@components/Header";
import { Movie, MovieList } from "@components/MovieList";
import { Text } from "@components/Text";

import { cineAPI } from "@services/api";
import { supabase } from "@services/supabase";

import { useSessionStore } from "@stores/session";
import { UserType, useUserStore } from "@stores/user";

export const Home = () => {
  const navigation = useNavigation();
  const user = useUserStore((state) => state.user);
  const session = useSessionStore((state) => state.session);
  const setUser = useUserStore((state) => state.setUser);

  const [movies, setMovies] = useState<Movie[]>([]);

  const goToProfile = () => {
    navigation.navigate("Profile");
  };

  const getMovies = async () => {
    const data = await cineAPI.getMovies();
    if (data.movies) {
      setMovies(data.movies);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Header
        onButtonPress={
          session ? goToProfile : () => navigation.navigate("SignIn")
        }
        userLogged={!!session}
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
