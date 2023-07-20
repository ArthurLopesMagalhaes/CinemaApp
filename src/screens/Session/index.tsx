import { ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import BackSvg from "../../assets/back.svg";
import CalendarSvg from "../../assets/calendar.svg";
import ClockSvg from "../../assets/clock.svg";

import { Text } from "../../components/Text";
import { TopBar } from "../../components/TopBar";
import { SeatsLegendBox } from "./components/SeatsLegend";
import { SeatsMap } from "./components/SeatsMap";

import {
  Bottom,
  Container,
  DateAndTimeBox,
  DateAndTimeButton,
  TopFixed,
} from "./styles";
import { ModalSelectSeat } from "./components/SelectSeatModal";
import { useContext, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { SessionContext, SessionProvider } from "../../contexts/SessionContext";
import { useTicketStore } from "../../stores/tickets";

export const Session = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const ModalSelectSeatRef = useRef<BottomSheet>(null);
  const { state, dispatch } = useContext(SessionContext);
  const tickets = useTicketStore((state) => state.tickets);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.expand();
  };

  console.log(tickets);

  return (
    <Container>
      <TopFixed>
        <TopBar title="Cinema" subtitle="The Batman" leftIcon={BackSvg} />

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
        <SeatsLegendBox />
        <SeatsMap onSeatPress={() => openModal(ModalSelectSeatRef)} />
      </Bottom>
      <ModalSelectSeat ref={ModalSelectSeatRef} />
    </Container>
  );
};
