import { useContext, useEffect, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { SessionContext } from "../../contexts/SessionContext";
import { useTicketStore } from "../../stores/tickets";
import { cineAPI } from "../../services/api";

import { Loading } from "../../components/Loading";
import { ModalSelectSeat } from "./components/SelectSeatModal";
import { SeatsLegendBox } from "./components/SeatsLegend";
import { SeatsMap } from "./components/SeatsMap";
import { Text } from "../../components/Text";
import { TopBar } from "../../components/TopBar";

import BackSvg from "../../assets/back.svg";
import CalendarSvg from "../../assets/calendar.svg";
import ClockSvg from "../../assets/clock.svg";

import {
  Bottom,
  Container,
  DateAndTimeBox,
  DateAndTimeButton,
  TopFixed,
} from "./styles";
import { SelectDateAndTimeModal } from "./components/SelectDateAndTimeModal";
import { Divider } from "../../components/Divider";
import { Database } from "../../lib/database.types";
import { whichSeatsArrangement } from "../../utils/whichSeatsArrangement";

type SessionsData = Database["public"]["Tables"]["sessions"]["Row"];

type RouteParams = {
  movieId: string;
};

export const Session = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);
  const [sessionsDateAndTime, setSessionsDateAndTime] = useState([""]);
  const [selectedSession, setSelectedSession] = useState("");
  const [sessions, setSessions] = useState<SessionsData[]>([]);
  const ModalSelectSeatRef = useRef<BottomSheet>(null);
  const ModalSelectDateAndTimeRef = useRef<BottomSheet>(null);
  const tickets = useTicketStore((state) => state.tickets);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.expand();
  };

  const { movieId } = route.params as RouteParams;

  const getSession = async () => {
    const response = await cineAPI.getSession(movieId);
    if (response.sessions) {
      setSessions(response.sessions);
      console.log(response.sessions);
      setSessionsDateAndTime(
        response.sessions.map((session) => session.date_and_time)
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    getSession();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <TopFixed>
        <TopBar title="Cinema" subtitle="The Batman" leftIcon={BackSvg} />

        <DateAndTimeBox>
          <DateAndTimeButton
            activeOpacity={0.7}
            onPress={() => openModal(ModalSelectDateAndTimeRef)}
          >
            <CalendarSvg />
            <Text>{selectedSession.slice(0, 7) || "-- / --"}</Text>
            <Divider left={50} />
            <ClockSvg />
            <Text>{selectedSession.slice(11, 16) || "-- : --"}</Text>
          </DateAndTimeButton>
        </DateAndTimeBox>
      </TopFixed>
      <Bottom>
        <SeatsLegendBox />
        <SeatsMap
          seatsArrangement={whichSeatsArrangement(sessions, selectedSession)}
          onSeatPress={() => openModal(ModalSelectSeatRef)}
        />
      </Bottom>
      <ModalSelectSeat ref={ModalSelectSeatRef} />
      <SelectDateAndTimeModal
        ref={ModalSelectDateAndTimeRef}
        data={sessionsDateAndTime}
        onPress={setSelectedSession}
      />
    </Container>
  );
};
