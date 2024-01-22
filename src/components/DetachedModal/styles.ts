import styled from "styled-components/native";

import { theme } from "@global/theme";

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 18px;
  gap: 16px;
`;

export const ConfirmButton = styled.TouchableOpacity`
  background-color: ${theme.colors.semantic.warning};
  border-radius: 8px;
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
export const CancelButton = styled.TouchableOpacity`
  background-color: ${theme.colors.surface.deep};
  border-radius: 8px;
  flex: 1;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.View`
  width: 85%;
  background-color: #1d283d;
  border-radius: 14px;
  padding: 20px;
`;
