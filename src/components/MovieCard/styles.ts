import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  align-self: flex-start;
  border-radius: 8px;
`;

export const MovieImage = styled.Image`
  aspect-ratio: 2/3;
  border-radius: 8px;
`;
export const MovieRating = styled.View`
  padding: 4px 8px;
  border-radius: 4px;
  position: absolute;
  z-index: 1;
  right: 8px;
  top: 8px;
  background-color: ${(props) => props.theme.colors.primary.main};
`;
