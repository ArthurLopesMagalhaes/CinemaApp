import { Alert } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useStripe } from "@stripe/stripe-react-native";
import { useTheme } from "styled-components";

import BackSvg from "../../assets/back.svg";
import { Container, Row, TopInfo, BottomInfo, Footer } from "./styles";
import { Text } from "../../components/Text";
import { TopBar } from "../../components/TopBar";
import { TearLine } from "../../components/TearLine";
import { Button } from "../../components/Button";

import { useMovieStore } from "../../stores/movie";
import { useCartStore } from "../../stores/cart";
import { useUserStore } from "../../stores/user";
import { cineAPI } from "../../services/api";
import { StripeAPI } from "../../services/stripeAPI";
import { getUpdatedSeats } from "../../utils/getUpdatedSeats";
import { getTicketsIdFromCart } from "../../utils/getTicketsIdFromCart";
import { SessionsData } from "../Session";
import { formatDate } from "../../utils/formatDate";

type RouteParams = {
  sessionData: SessionsData;
};

export const Cart = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();
  const cart = useCartStore((state) => state.cart);
  const movie = useMovieStore((state) => state.movie);
  const user = useUserStore((state) => state.user);
  const clearCart = useCartStore((state) => state.clearCart);

  const { sessionData } = route.params as RouteParams;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const goBack = () => {
    navigation.goBack();
  };

  const updateSession = async () => {
    const newSeatsArrangement = getUpdatedSeats(
      [...sessionData.seats_arrangement],
      getTicketsIdFromCart(cart.tickets)
    );
    const response = await cineAPI.updateSession(
      sessionData.id,
      newSeatsArrangement
    );
    clearCart();
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await StripeAPI.fetchPaymentSheetParams(1000, "eren@gmai.com");

    const { error } = await initPaymentSheet({
      merchantDisplayName: "CINE APP",
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      defaultBillingDetails: {
        address: {
          country: "BR",
        },
      },
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      const responseOrder = await cineAPI.createOrder(user.id);
      const responseTicket = await cineAPI.createTicket(
        cart.tickets.map((ticket) => ({
          movie_id: movie.id,
          user_id: user.id,
          seat_position: ticket.id,
          ticket_type: ticket.type,
          order_id: responseOrder.data![0].id,
          session_id: sessionData.id,
        }))
      );
      updateSession();
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Container>
      <TopBar title="Cart" leftIcon={BackSvg} onLeftIconPress={goBack} />
      <TopInfo>
        <Text weight="Bold" size={18}>
          {movie.title}
        </Text>
        <Row>
          <Text color={theme.colors.text.muted} style={{ width: 90 }}>
            Cinema
          </Text>
          <Text weight="Medium">Cinema APP</Text>
        </Row>
        <Row>
          <Text color={theme.colors.text.muted} style={{ width: 90 }}>
            Date
          </Text>
          <Text weight="Medium">{formatDate(sessionData.date_and_time)}</Text>
        </Row>
        <Row>
          <Text color={theme.colors.text.muted} style={{ width: 90 }}>
            Seats
          </Text>
          <Text weight="Medium">
            {cart.tickets.map((item) => item.id).join(", ")}
          </Text>
        </Row>
      </TopInfo>
      <BottomInfo>
        <Row>
          <Text
            color={theme.colors.text.muted}
            style={{ width: 90 }}
            weight="Medium"
            size={16}
          >
            1x Adult
          </Text>
          <Text weight="Medium" size={16}>
            R$ 80
          </Text>
        </Row>
      </BottomInfo>
      <TearLine />
      <Footer>
        <Button label="Continue" onPress={openPaymentSheet} />
      </Footer>
    </Container>
  );
};
