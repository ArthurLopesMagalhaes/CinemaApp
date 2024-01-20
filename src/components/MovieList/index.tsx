import { FlatList } from "react-native";

import { Divider } from "../Divider";
import { MovieCard } from "../MovieCard";

export type Movie = {
  id: string;
  title: string;
  genres: string[];
  image_url: string;
};

type MovieListProps = {
  data: Movie[];
};

export const MovieList = ({ data }: MovieListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", gap: 20 }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Divider top={16} />}
      renderItem={({ item }) => <MovieCard data={item} />}
    />
  );
};
