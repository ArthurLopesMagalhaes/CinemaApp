import { SvgProps } from "react-native-svg";

import { useTheme } from "styled-components";

import CloseSvg from "@assets/close.svg";

import { Circle, Container, SeatLegendWrapper } from "./styles";

import { Text } from "@components/Text";

export type SeatLegendStyleProps = {
  circleBackground: string;
  icon?: React.FC<SvgProps>;
  status: "Available" | "Occupied" | "Chosen";
};

const SeatLegend = ({
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

export const SeatsLegendBox = () => {
  const theme = useTheme();

  return (
    <SeatLegendWrapper>
      <SeatLegend
        circleBackground={theme.colors.border.main}
        status="Available"
      />
      <SeatLegend
        circleBackground={theme.colors.surface.main}
        icon={CloseSvg}
        status="Occupied"
      />
      <SeatLegend
        circleBackground={theme.colors.primary.main}
        status="Chosen"
      />
    </SeatLegendWrapper>
  );
};
