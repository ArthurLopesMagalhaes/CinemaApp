import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background.main};
`;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;
export const Footer = styled.View`
  height: 100px;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;
export const ScanButton = styled.TouchableOpacity`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  background: ${(props) => props.theme.colors.primary.main};
  justify-content: center;
  align-items: center;
`;
