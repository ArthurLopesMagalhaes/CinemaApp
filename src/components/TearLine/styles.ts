import { styled } from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
`;

export const Circles = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors.background.main};
`;
export const Circle = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.background.main};
`;
