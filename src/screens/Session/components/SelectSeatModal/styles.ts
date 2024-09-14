import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: 0 16px 16px;
`;

export const TextsBox = styled.View`
  justify-content: center;
  align-items: center;
`;

export const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#1D283D',
    borderRadius: 16,
  },
  indicator: {
    height: 0,
  },
});
