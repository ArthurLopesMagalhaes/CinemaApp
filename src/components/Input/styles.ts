import styled from "styled-components/native";

type InputProps = {
  error?: boolean;
};

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.text.muted,
}))<InputProps>`
  width: 100%;
  border: 1px solid
    ${(props) =>
      props.error
        ? props.theme.colors.semantic.warning
        : (props) => props.theme.colors.border.main};
  border-radius: 8px;
  height: 56px;
  padding: 16px;
  color: ${(props) => props.theme.colors.text.main};
`;
