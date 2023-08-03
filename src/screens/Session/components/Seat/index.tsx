import { SvgProps } from "react-native-svg";

import { Text } from "../../../../components/Text";
import { DefineColor } from "../../../../utils/DefineColor";
import { Container } from "./styles";

import CloseSVG from "../../../../assets/close.svg";

export type SeatProps = {
  id: string;
  status: "available" | "occupied" | "chosen";
  name?: string;
  onPress: () => void;
};

export const Seat = ({ id, status, name, onPress }: SeatProps) => {
  return (
    <Container
      background={DefineColor(status)}
      onPress={onPress}
      disabled={status === "occupied"}
      activeOpacity={0.7}
    >
      {status === "occupied" ? (
        <CloseSVG width={8} />
      ) : (
        name !== "empty" && <Text size={12}>{name}</Text>
      )}
    </Container>
  );
};
