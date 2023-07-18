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
import { useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export const Session = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const ModalSelectSeatRef = useRef<BottomSheet>(null);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.expand();
    console.log("first");
  };

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
        <SeatsLegendBox />
        <SeatsMap onSeatPress={() => openModal(ModalSelectSeatRef)} />
      </Bottom>
      <ModalSelectSeat ref={ModalSelectSeatRef} />
    </Container>
  );
};
