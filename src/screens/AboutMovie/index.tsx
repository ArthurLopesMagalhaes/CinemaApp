import { useEffect, useState } from "react";

import { useTheme } from "styled-components";

import { useNavigation, useRoute } from "@react-navigation/native";

import BackSvg from "@assets/back.svg";

import {
  AboutMovieWrapper,
  Container,
  Content,
  Footer,
  LabelsRow,
  MovieImg,
} from "./styles";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { Loading } from "@components/Loading";
import { Text } from "@components/Text";
import { TopBar } from "@components/TopBar";

import { cineAPI } from "@services/api";

import { Database } from "@lib/database.types";

import { useMovieStore } from "@stores/movie";
import { useSessionStore } from "@stores/session";

type RouteParams = {
  movieId: string;
};

type MovieData = Database["public"]["Tables"]["movies"]["Row"];

export const AboutMovie = () => {
  const route = useRoute();
  const theme = useTheme();
  const navigation = useNavigation();
  const session = useSessionStore((state) => state.session);

  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<MovieData>();
  const setMovie = useMovieStore((state) => state.setMovie);

  const { movieId } = route.params as RouteParams;

  const goBack = () => {
    navigation.goBack();
  };

  const getMovieDetails = async () => {
    const response = await cineAPI.getMovieDetails(movieId);
    if (response.movies) {
      setMovieData(response.movies);
      setMovie(response.movies);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetails();
  }, [movieId]);

  return loading || !movieData ? (
    <Loading />
  ) : (
    <Container>
      <TopBar
        title={movieData.title}
        leftIcon={BackSvg}
        onLeftIconPress={goBack}
      />
      <Content>
        <MovieImg source={{ uri: movieData.image_url }} resizeMode="cover" />
        <AboutMovieWrapper>
          <Text>{movieData.description}</Text>
          <Divider top={16} />
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Certificate
            </Text>
            <Text>{movieData.certificate}</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Runtime
            </Text>
            <Text>{movieData.runtime}</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Genre
            </Text>
            <Text>{movieData.genres?.join(", ")}</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Director
            </Text>
            <Text>{movieData.director}</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Cast
            </Text>
            <Text style={{ flex: 1 }}>{movieData.cast?.join(", ")}</Text>
          </LabelsRow>
        </AboutMovieWrapper>
      </Content>
      <Footer>
        <Button
          label="Select Session"
          onPress={
            session
              ? () => navigation.navigate("Session", { movieId })
              : () => navigation.navigate("SignIn")
          }
        />
      </Footer>
    </Container>
  );
};
