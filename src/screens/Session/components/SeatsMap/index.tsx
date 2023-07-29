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

type SeatsMapProps = {
  onSeatPress: () => void;
};

const NUM_OF_COLUMNS = 14;
const NUM_OF_ROWS = 20;

export const SeatsMap = ({ onSeatPress }: SeatsMapProps) => {
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
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          width: "100%",
        }}
        horizontal
      >
        <ScrollView contentContainerStyle={{ rowGap: 8 }}>
          {SeatMock.map((row, i) => (
            <Row>
              {SeatMock[i].map((seat, i) => (
                <Seat
                  id={seat.id}
                  key={i}
                  status="Chosen"
                  name={seat.name}
                  onPress={onSeatPress}
                />
              ))}
            </Row>
          ))}
        </ScrollView>
      </ScrollView>
    </>
  );
};
