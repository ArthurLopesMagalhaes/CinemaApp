import { ReactNode } from "react";
import { Column, ScreenBox } from "./styles";
import { ScrollView, View } from "react-native";
import { Seat } from "../Seat";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import ScreenSVG from "../../../../assets/screen.svg";
import { Divider } from "../../../../components/Divider";
import { Text } from "../../../../components/Text";
import { SeatMock } from "../../../../mocks/seats.mock";
import { Json } from "../../../../lib/database.types";
import { useTicketStore } from "../../../../stores/tickets";
import { useCartStore } from "../../../../stores/cart";

type Seat = {
  id: string;
  name: string;
  status: "available" | "occupied" | "chosen" | "";
};

type SeatsMapProps = {
  sessionId: string;
  seatsArrangement: Seat[][];
  onSeatPress: (seatId: string) => void;
};

export const SeatsMap = ({
  sessionId,
  seatsArrangement,
  onSeatPress,
}: SeatsMapProps) => {
  const theme = useTheme();
  const tickets = useTicketStore((state) => state.tickets);
  const cart = useCartStore((state) => state.cart);

  const defineStatus = (seat: Seat) => {
    let status: Seat["status"] = "";
    if (sessionId === cart.sessionId) {
      cart.tickets.forEach((ticket) => {
        if (ticket.id === seat.id) {
          return (status = "chosen");
        }
      });
      return status;
    }
    return status;
  };

  return (
    <>
      <ScreenBox>
        <Text style={{ textAlign: "center" }} color={theme.colors.text.muted}>
          SCREEN
        </Text>
        <ScreenSVG />
        <Divider top={24} />
      </ScreenBox>
      {seatsArrangement && (
        <ScrollView
          contentContainerStyle={{
            padding: 16,
            width: "100%",
          }}
        >
          <ScrollView contentContainerStyle={{ gap: 8 }} horizontal>
            {seatsArrangement.map((row, i) => (
              <Column key={i}>
                {seatsArrangement[i].map((seat, i) => (
                  <Seat
                    id={seat.id}
                    key={seat.id}
                    status={defineStatus(seat) || seat.status}
                    name={seat.name}
                    onPress={onSeatPress}
                  />
                ))}
              </Column>
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </>
  );
};
