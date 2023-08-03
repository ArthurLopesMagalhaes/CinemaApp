import { ReactNode } from "react";
import { Row, ScreenBox } from "./styles";
import { ScrollView, View } from "react-native";
import { Seat } from "../Seat";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import ScreenSVG from "../../../../assets/screen.svg";
import { Divider } from "../../../../components/Divider";
import { Text } from "../../../../components/Text";
import { SeatMock } from "../../../../mocks/seats.mock";
import { Json } from "../../../../lib/database.types";

type SeatsMapProps = {
  seatsArrangement: {
    id: string;
    name: string;
    status: "available" | "occupied" | "chosen";
  }[][];
  onSeatPress: () => void;
};

export const SeatsMap = ({ seatsArrangement, onSeatPress }: SeatsMapProps) => {
  const theme = useTheme();

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
          horizontal
        >
          <ScrollView contentContainerStyle={{ rowGap: 8 }}>
            {seatsArrangement.map((row, i) => (
              <Row>
                {seatsArrangement[i].map((seat, i) => (
                  <Seat
                    id={seat.id}
                    key={i}
                    status={seat.status}
                    name={seat.name}
                    onPress={onSeatPress}
                  />
                ))}
              </Row>
            ))}
          </ScrollView>
        </ScrollView>
      )}
    </>
  );
};
