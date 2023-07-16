import styled from "styled-components/native";

import { SeatLegendStyleProps } from ".";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;
export const Circle = styled.View<SeatLegendStyleProps>`
  height: 16px;
  width: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.circleBackground};
  justify-content: center;
  align-items: center;
`;
