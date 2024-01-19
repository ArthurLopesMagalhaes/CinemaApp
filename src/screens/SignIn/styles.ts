import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import { theme } from "../../global/theme";

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 16px;
  background-color: #1d283d;
`;

export const FormWrapper = styled.View`
  width: 100%;
  justify-content: center;
  flex: 1;
`;

export const FormHeader = styled.View`
  align-items: center;
`;

export const ButtonBox = styled.View`
  flex-direction: row;
`;
