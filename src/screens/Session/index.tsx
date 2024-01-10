import React, { useContext, useEffect, useRef, useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useNavigation, useRoute } from "@react-navigation/native";

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
  ButtonWrapper,
  Container,
  DateAndTimeBox,
  DateAndTimeButton,
  TopFixed,
} from "./styles";
import { SelectDateAndTimeModal } from "./components/SelectDateAndTimeModal";
import { Divider } from "../../components/Divider";
import { Database } from "../../lib/database.types";
import { whichSeatsArrangement } from "../../utils/whichSeatsArrangement";

import { useCartStore } from "../../stores/cart";
import { Button } from "../../components/Button";
import { getUpdatedSeats } from "../../utils/getUpdatedSeats";
import { getTicketsIdFromCart } from "../../utils/getTicketsIdFromCart";

export type SessionsData = Database["public"]["Tables"]["sessions"]["Row"];

type RouteParams = {
  movieId: string;
};

export const Session = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const ModalSelectSeatRef = useRef<BottomSheet>(null);
  const ModalSelectDateAndTimeRef = useRef<BottomSheet>(null);
  const tickets = useTicketStore((state) => state.tickets);
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const [loading, setLoading] = useState(true);
  const [currentSeat, setCurrentSeat] = useState("");
  const [selectedSession, setSelectedSession] = useState({
    date_and_time: "",
  } as SessionsData);
  const [sessions, setSessions] = useState<SessionsData[]>([]);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.expand();
  };

  const closeModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.close();
  };

  const onSeatPress = (seatId: string) => {
    openModal(ModalSelectSeatRef);
    setCurrentSeat(seatId);
  };

  const handleSelectDateAndTime = (session: SessionsData) => {
    setSelectedSession(session);
    closeModal(ModalSelectDateAndTimeRef);
  };

  const { movieId } = route.params as RouteParams;

  const getSession = async () => {
    const response = await cineAPI.getSession(movieId);
    if (response.sessions) {
      setSessions(response.sessions);
    }
    setLoading(false);
  };

  const updateSession = async () => {
    const newSeatsArrangement = getUpdatedSeats(
      [...selectedSession.seats_arrangement],
      getTicketsIdFromCart(cart.tickets)
    );
    const response = await cineAPI.updateSession(
      selectedSession.id,
      newSeatsArrangement
    );
    console.log(response);
    clearCart();
  };

  const goToCheckout = () => {
    navigation.navigate("Cart");
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
            <Text>
              {selectedSession.date_and_time.slice(0, 7) || "-- / --"}
            </Text>
            <Divider left={50} />
            <ClockSvg />
            <Text>
              {selectedSession.date_and_time.slice(11, 16) || "-- : --"}
            </Text>
          </DateAndTimeButton>
        </DateAndTimeBox>
      </TopFixed>
      <Bottom>
        <Button label="LOG" onPress={() => console.log(cart.tickets)} />
        <SeatsLegendBox />
        <SeatsMap
          sessionId={selectedSession.id}
          seatsArrangement={whichSeatsArrangement(sessions, selectedSession.id)}
          onSeatPress={onSeatPress}
        />
      </Bottom>
      {cart.tickets.length > 0 && (
        <ButtonWrapper>
          <Button label="Buy tickets" onPress={goToCheckout} />
        </ButtonWrapper>
      )}
      <ModalSelectSeat
        ref={ModalSelectSeatRef}
        seat={currentSeat}
        sessionId={selectedSession.id}
      />
      <SelectDateAndTimeModal
        ref={ModalSelectDateAndTimeRef}
        data={sessions.map((session) => session)}
        onPress={handleSelectDateAndTime}
      />
    </Container>
  );
};
