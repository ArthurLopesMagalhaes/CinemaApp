import { FlatList } from "react-native";

import { MovieMock } from "../../mocks/movie.mock";
import { Divider } from "../Divider";
import { MovieCard } from "../MovieCard";

export const MovieList = () => {
  return (
    <FlatList
      data={MovieMock}
      keyExtractor={(item) => item.id}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", gap: 20 }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Divider top={16} />}
      renderItem={({ item }) => <MovieCard data={item} />}
    />
  );
};
