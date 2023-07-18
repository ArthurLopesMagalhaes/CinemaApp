import { SvgProps } from "react-native-svg";

import { Text } from "../../../../components/Text";
import { theme } from "../../../../global/theme";
import { DefineColor } from "../../../../utils/DefineColor";
import { Container } from "./styles";

import CloseSVG from "../../../../assets/close.svg";

export type SeatProps = {
  status: "Available" | "Occupied" | "Chosen";
  number?: number;
  icon?: React.FC<SvgProps>;
  onPress: () => void;
};

export const Seat = ({ status, number, icon: Icon, onPress }: SeatProps) => {
  return (
    <Container
      background={DefineColor(status)}
      onPress={onPress}
      disabled={status === "Occupied"}
      activeOpacity={0.7}
    >
      {status === "Occupied" ? (
        <CloseSVG width={8} />
      ) : (
        <Text size={12}>{number}</Text>
      )}
    </Container>
  );
};
