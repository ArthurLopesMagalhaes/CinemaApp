import { Container, Row, TopInfo, BottomInfo, Footer } from "./styles";
import { Text } from "../../components/Text";
import { cineAPI } from "../../services/api";
import { useCartStore } from "../../stores/cart";
import { TopBar } from "../../components/TopBar";

import BackSvg from "../../assets/back.svg";
import { TearLine } from "../../components/TearLine";
import { useTheme } from "styled-components";
import { Button } from "../../components/Button";
import { useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect } from "react";
import { Alert } from "react-native";
import { StripeAPI } from "../../services/stripeAPI";

export const Cart = () => {
  const theme = useTheme();
  const cart = useCartStore((state) => state.cart);

  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const [loading, setLoading] = useState(false);

  const updateSession = async () => {
    const response = await cineAPI.updateSession(cart.sessionId, [
      [{ id: "A1", status: "occupied", name: "A1" }],
    ]);
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
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  return (
    <Container>
      <TopBar title="Cart" leftIcon={BackSvg} />
      <TopInfo>
        <Text weight="Bold" size={18}>
          The Batman
        </Text>
        <Row>
          <Text color={theme.colors.text.muted} style={{ width: 90 }}>
            Cinema
          </Text>
          <Text weight="Medium">Eurasia Cinema</Text>
        </Row>
        <Row>
          <Text color={theme.colors.text.muted} style={{ width: 90 }}>
            Date
          </Text>
          <Text weight="Medium">6 April 2022, 14:40</Text>
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
