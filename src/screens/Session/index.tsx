import { ScrollView, View } from "react-native";
import { useTheme } from "styled-components";

import BackSvg from "../../assets/back.svg";
import CalendarSvg from "../../assets/calendar.svg";
import ClockSvg from "../../assets/clock.svg";
import CloseSvg from "../../assets/close.svg";
import { Text } from "../../components/Text";
import { TopBar } from "../../components/TopBar";
import { Seat } from "./components/Seat";
import { SeatLegend } from "./components/SeatsLegend";
import {
  Bottom,
  Container,
  DateAndTimeBox,
  DateAndTimeButton,
  SeatLegendBox,
  TopFixed,
} from "./styles";

export const Session = () => {
  const theme = useTheme();

  return (
    <Container>
      <TopFixed>
        <TopBar title="Cinema Tal" subtitle="The Batman" leftIcon={BackSvg} />
        <DateAndTimeBox>
          <DateAndTimeButton>
            <CalendarSvg />
            <Text>April, 14</Text>
          </DateAndTimeButton>
          <DateAndTimeButton>
            <ClockSvg />
            <Text>15:10</Text>
          </DateAndTimeButton>
        </DateAndTimeBox>
      </TopFixed>
      <Bottom>
        <SeatLegendBox>
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
        </SeatLegendBox>
        <View
          style={{
            backgroundColor: "red",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Seat status="Occupied" number={8} />
        </View>
      </Bottom>
    </Container>
  );
};
