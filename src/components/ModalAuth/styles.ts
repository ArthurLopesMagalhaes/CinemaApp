import { StyleSheet } from "react-native";
import styled from "styled-components/native";

import { theme } from "../../global/theme";

export const ModalWrapper = styled.Modal``;
export const ModalBody = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  justify-content: flex-start;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  padding: 0px 16px 16px;
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

export const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#1D283D",
    borderRadius: 16,
  },
  indicator: {
    height: 0,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 40,
    paddingTop: 15,
    paddingRight: 40,
  },

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  textInput: {
    alignSelf: "stretch",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border.main,
    color: "white",
  },
});
