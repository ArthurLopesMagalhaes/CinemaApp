import { FlatList } from 'react-native';

import { EmptyList } from '@components/EmptyList';

import { MovieData } from '@screens/AboutMovie';

import { Divider } from '../Divider';
import { MovieCard } from '../MovieCard';

export type Movie = Pick<
  MovieData,
  'id' | 'title' | 'genres' | 'image_url' | 'rating'
>;

type MovieListProps = {
  data: Movie[];
};

export const MovieList = ({ data }: MovieListProps) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-between', gap: 20 }}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <Divider top={16} />}
      ListEmptyComponent={() => <EmptyList text="No movies founded :(" />}
      renderItem={({ item }) => <MovieCard data={item} />}
    />
  );
};
