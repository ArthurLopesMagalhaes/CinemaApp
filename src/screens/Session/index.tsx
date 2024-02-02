import React, { useEffect, useRef, useState } from "react";

import { useNavigation, useRoute } from "@react-navigation/native";

import BackSvg from "@assets/back.svg";
import CalendarSvg from "@assets/calendar.svg";
import ClockSvg from "@assets/clock.svg";

import {
  Bottom,
  ButtonWrapper,
  Container,
  DateAndTimeBox,
  DateAndTimeButton,
  TopFixed,
} from "./styles";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { EmptyList } from "@components/EmptyList";
import { Loading } from "@components/Loading";
import { Text } from "@components/Text";
import { TopBar } from "@components/TopBar";

import { formatDate } from "@utils/formatDate";
import { formatTime } from "@utils/formatTime";
import { whichSeatsArrangement } from "@utils/whichSeatsArrangement";

import { cineAPI } from "@services/api";

import { Database } from "@lib/database.types";

import { SeatsLegendBox } from "./components/SeatsLegend";
import { SeatsMap } from "./components/SeatsMap";
import { SelectDateAndTimeModal } from "./components/SelectDateAndTimeModal";
import { ModalSelectSeat } from "./components/SelectSeatModal";

import BottomSheet from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useCartStore } from "@stores/cart";
import { useMovieStore } from "@stores/movie";

export type SessionsData = Database["public"]["Tables"]["sessions"]["Row"];

type RouteParams = {
  movieId: string;
};

export const Session = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const ModalSelectSeatRef = useRef<BottomSheet>(null);
  const ModalSelectDateAndTimeRef = useRef<BottomSheet>(null);

  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const movie = useMovieStore((state) => state.movie);

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

  const goBack = () => {
    navigation.goBack();
  };

  const getSession = async () => {
    const response = await cineAPI.getSession(movieId);
    if (response.sessions) {
      setSessions(response.sessions);
    }
    setLoading(false);
  };

  const goToCheckout = () => {
    navigation.navigate("Cart", { sessionData: selectedSession });
  };

  useEffect(() => {
    getSession();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <TopFixed>
        <TopBar
          title="Cinema"
          subtitle={movie.title}
          leftIcon={BackSvg}
          onLeftIconPress={goBack}
        />

        <DateAndTimeBox>
          <DateAndTimeButton
            activeOpacity={0.7}
            onPress={() => openModal(ModalSelectDateAndTimeRef)}
          >
            <CalendarSvg />
            <Text>
              {formatDate(selectedSession.date_and_time) || "-- / --"}
            </Text>
            <Divider left={50} />
            <ClockSvg />
            <Text>
              {formatTime(selectedSession.date_and_time) || "-- : --"}
            </Text>
          </DateAndTimeButton>
        </DateAndTimeBox>
      </TopFixed>
      <Bottom>
        {!selectedSession.id ? (
          <EmptyList text="Please, select a session above." />
        ) : (
          <>
            <SeatsLegendBox />
            <SeatsMap
              sessionId={selectedSession.id}
              seatsArrangement={whichSeatsArrangement(
                sessions,
                selectedSession.id,
              )}
              onSeatPress={onSeatPress}
            />
          </>
        )}
      </Bottom>
      {cart.tickets.length > 0 && selectedSession.id === cart.sessionId && (
        <ButtonWrapper>
          <Button label="Buy tickets" onPress={goToCheckout} />
        </ButtonWrapper>
      )}
      <ModalSelectSeat
        ref={ModalSelectSeatRef}
        seat={currentSeat}
        sessionId={selectedSession.id}
        afterSelection={() => closeModal(ModalSelectSeatRef)}
      />
      <SelectDateAndTimeModal
        ref={ModalSelectDateAndTimeRef}
        data={sessions.map((session) => session)}
        onPress={handleSelectDateAndTime}
      />
    </Container>
  );
};
