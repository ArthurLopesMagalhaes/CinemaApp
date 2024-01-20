import CloseSVG from "@assets/close.svg";

import { Container } from "./styles";

import { Text } from "@components/Text";

import { defineColor } from "@utils/defineColor";
import { defineDisable } from "@utils/defineDisable";

import { useCartStore } from "@stores/cart";

export type SeatProps = {
  id: string;
  status: "available" | "occupied" | "chosen" | "empty" | "";
  name?: string;
  onPress: (seatId: string) => void;
};

export const Seat = ({ id, status, name, onPress }: SeatProps) => {
  const removeTicket = useCartStore((state) => state.removeTicket);

  return (
    <Container
      background={defineColor(status)}
      onPress={status === "chosen" ? () => removeTicket(id) : () => onPress(id)}
      disabled={defineDisable(status)}
      activeOpacity={0.7}
    >
      {status === "occupied" ? (
        <CloseSVG width={8} />
      ) : (
        status !== "empty" && <Text size={12}>{name}</Text>
      )}
    </Container>
  );
};
