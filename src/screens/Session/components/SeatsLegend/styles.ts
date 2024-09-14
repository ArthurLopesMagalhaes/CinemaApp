import styled from 'styled-components/native';

type SeatLegendStyleProps = {
  circleBackground: string;
};

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

export const SeatLegendWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  align-items: center;
  padding: 16px;
`;
