import { SvgProps } from "react-native-svg";
import styled from "styled-components/native";

import { Text } from "../../../../components/Text";
import { Circle, Container } from "./styles";

export type SeatLegendStyleProps = {
  circleBackground: string;
  icon?: React.FC<SvgProps>;
  status: "Available" | "Occupied" | "Chosen";
};

export const SeatLegend = ({
  circleBackground,
  icon: Icon,
  status,
}: SeatLegendStyleProps) => {
  return (
    <Container>
      <Circle circleBackground={circleBackground}>
        {Icon && <Icon width={8} />}
      </Circle>
      <Text size={12}>{status}</Text>
    </Container>
  );
};
