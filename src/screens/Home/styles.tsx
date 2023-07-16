import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.main};
`;
export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;
