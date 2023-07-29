import styled from "styled-components/native";

import { theme } from "../../global/theme";

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 0px 16px 16px;
  background-color: #1d283d;
`;
export const ButtonBox = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.text.muted,
}))`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.border.main};
  border-radius: 8px;
  height: 56px;
  padding: 16px;
  color: ${(props) => props.theme.colors.text.main};
`;
