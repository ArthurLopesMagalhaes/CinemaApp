import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.main};
`;

export const Content = styled.View`
  flex: 1;
`;

export const MovieImg = styled.Image`
  height: 200px;
`;

export const AboutMovieWrapper = styled.ScrollView`
  padding: 16px;
`;

export const LabelsRow = styled.View`
  flex-direction: row;
  gap: 15px;
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  padding: 16px;
  height: 88px;
`;
