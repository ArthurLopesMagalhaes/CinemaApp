import { SvgProps } from "react-native-svg";

import { Text } from "../../../../components/Text";
import { theme } from "../../../../global/theme";
import { DefineColor } from "../../../../utils/DefineColor";
import { Container } from "./styles";

export type SeatProps = {
  status: "Available" | "Occupied" | "Chosen";
  number?: number;
  icon?: React.FC<SvgProps>;
  background?: string;
};

export const Seat = ({ status, number, icon: Icon }: SeatProps) => {
  return (
    <Container background={DefineColor(status)}>
      {number && <Text size={12}>{number}</Text>}
    </Container>
  );
};
