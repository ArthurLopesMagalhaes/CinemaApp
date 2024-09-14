import { useEffect, useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Container, Content } from './styles';

import { Divider } from '@components/Divider';
import { Header } from '@components/Header';
import { Loading } from '@components/Loading';
import { Movie, MovieList } from '@components/MovieList';
import { Text } from '@components/Text';

import { cineAPI } from '@services/api';

import { useSessionStore } from '@stores/session';

export const Home = () => {
  const navigation = useNavigation();
  const session = useSessionStore((state) => state.session);

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const getMovies = async () => {
    const data = await cineAPI.getMovies();
    if (data.movies) {
      setMovies(data.movies);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Header
        onButtonPress={
          session ? goToProfile : () => navigation.navigate('SignIn')
        }
        userLogged={!!session}
      />
      <Content>
        <Text weight="Bold" size={24}>
          Now in cinemas
        </Text>
        <Divider top={16} />
        {loading ? <Loading /> : <MovieList data={movies} />}
      </Content>
    </Container>
  );
};
