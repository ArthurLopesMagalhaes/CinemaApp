import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { Text } from "../Text";

import { Container, MovieImage, MovieRating } from "./styles";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const MOVIE_WIDTH = (SCREEN_WIDTH - 52) / 2;

type MovieCardProps = {
  data: {
    id: string;
    title: string;
    genre: string;
    imgURL: string;
  };
};

export const MovieCard = ({ data }: MovieCardProps) => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container
      activeOpacity={0.75}
      onPress={() => navigation.navigate("AboutMovie")}
    >
      <MovieRating>
        <Text>9.1</Text>
      </MovieRating>
      <MovieImage
        style={{ width: MOVIE_WIDTH }}
        resizeMode="cover"
        source={{
          uri: data.imgURL,
        }}
      />
      <Text
        numberOfLines={1}
        style={{ width: MOVIE_WIDTH }}
        color={theme.colors.text.main}
        size={16}
        weight="Bold"
      >
        {data.title}
      </Text>
      <Text color={theme.colors.text.muted}>{data.genre}</Text>
    </Container>
  );
};
