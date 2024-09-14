import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: 0 16px 16px;
`;

export const DateTimeContainer = styled.TouchableOpacity`
  padding: 16px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.colors.border.main};
  align-items: center;
  margin-bottom: 16px;
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
