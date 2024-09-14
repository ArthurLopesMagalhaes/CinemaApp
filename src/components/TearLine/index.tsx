import { Circle, Circles, Container } from './styles';

import { Text } from '../Text';

const NUMBER_OF_CIRCLES = 17;

export const TearLine = () => {
  return (
    <Container>
      <Circle style={{ position: 'absolute', left: -20 }} />
      {Array(NUMBER_OF_CIRCLES)
        .fill(0)
        .map((_, i) => (
          <Circles key={i} />
        ))}
      <Circle style={{ position: 'absolute', right: -20 }} />
    </Container>
  );
};
