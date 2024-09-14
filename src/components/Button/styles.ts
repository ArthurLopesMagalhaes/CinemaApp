import styled from 'styled-components/native';

import { ButtonProps } from '.';

type ButtonStyleProps = {
  loading?: boolean;
};

export const Container = styled.TouchableOpacity<ButtonStyleProps>`
  height: 56px;
  padding: 12px 0px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.loading
      ? props.theme.colors.semantic.disable
      : props.theme.colors.primary.main};
  align-items: center;
  justify-content: center;
  flex: 1;
`;
