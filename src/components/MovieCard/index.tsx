import { useNavigation } from "@react-navigation/native";
import { Dimensions, Image } from "react-native";
import { useTheme } from "styled-components";

import { Text } from "../Text";
import { Container, MovieImage, MovieRating } from "./styles";

const { width: SCREEN_WIDTH } = Dimensions.get("screen");
const MOVIE_WIDTH = (SCREEN_WIDTH - 52) / 2;

export const MovieCard = () => {
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
          uri: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/9EnfMH0nTPCna87Mh3G8Q6W2wze.jpg",
        }}
      />
      <Text color={theme.colors.text.main} size={16} weight="Bold">
        The Batman
      </Text>
      <Text color={theme.colors.text.muted}>Action</Text>
    </Container>
  );
};
