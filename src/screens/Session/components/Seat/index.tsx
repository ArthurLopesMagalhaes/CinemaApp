import { SvgProps } from "react-native-svg";

import { Text } from "../../../../components/Text";
import { DefineColor } from "../../../../utils/DefineColor";
import { Container } from "./styles";

import CloseSVG from "../../../../assets/close.svg";

export type SeatProps = {
  id: string;
  status: "Available" | "Occupied" | "Chosen";
  name?: string;
  icon?: React.FC<SvgProps>;
  onPress: () => void;
};

export const Seat = ({ id, status, name, icon: Icon, onPress }: SeatProps) => {
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
        <Text size={12}>{name}</Text>
      )}
    </Container>
  );
};
