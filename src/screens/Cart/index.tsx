import { useState } from 'react';
import { Alert, View } from 'react-native';

import LottieView from 'lottie-react-native';
import { useTheme } from 'styled-components';

import { useNavigation, useRoute } from '@react-navigation/native';

import BackSvg from '@assets/back.svg';
import Confirmed from '@assets/lottie/confirmed.json';

import { BottomInfo, Container, Footer, Row, TopInfo } from './styles';

import { Button } from '@components/Button';
import { DetachedModal } from '@components/DetachedModal';
import { TearLine } from '@components/TearLine';
import { Text } from '@components/Text';
import { TopBar } from '@components/TopBar';

import { calculateCartAmountPrice } from '@utils/calculateCartAmountPrice';
import { formatDateAndTime } from '@utils/formatDateAndTime';
import { getTicketsIdFromCart } from '@utils/getTicketsIdFromCart';
import { getUpdatedSeats } from '@utils/getUpdatedSeats';

import { cineAPI } from '@services/api';
import { StripeAPI } from '@services/stripeAPI';

import { SessionsData } from '../Session';

import { useCartStore } from '@stores/cart';
import { useMovieStore } from '@stores/movie';
import { useUserStore } from '@stores/user';
import { useStripe } from '@stripe/stripe-react-native';

type RouteParams = {
  sessionData: SessionsData;
};

export const Cart = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const theme = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
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

  const goHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };

  const updateSession = async () => {
    const newSeatsArrangement = getUpdatedSeats(
      [...sessionData.seats_arrangement],
      getTicketsIdFromCart(cart.tickets),
    );
    const response = await cineAPI.updateSession(
      sessionData.id,
      newSeatsArrangement,
    );
    clearCart();
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await StripeAPI.fetchPaymentSheetParams(
        50,
        // calculateCartAmountPrice(cart.tickets) * 100, // Stripe method (has to be in cents)
        user.email!,
      );

    const { error } = await initPaymentSheet({
      merchantDisplayName: 'CINE APP',
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,

      defaultBillingDetails: {
        address: {
          country: 'BR',
        },
      },
    });
    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    }
  };

  const openPaymentSheet = async () => {
    setLoading(true);
    try {
      await initializePaymentSheet();
      const { error } = await presentPaymentSheet();

      if (error) {
        return Alert.alert(`Error code: ${error.code}`, error.message);
      }
      const responseOrder = await cineAPI.createOrder(user.id);
      const responseTicket = await cineAPI.createTicket(
        cart.tickets.map((ticket) => ({
          movie_id: movie.id,
          user_id: user.id,
          seat_position: ticket.id,
          ticket_type: ticket.type,
          order_id: responseOrder.data![0].id,
          session_id: sessionData.id,
        })),
      );
      updateSession();
      setModalVisible(true);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

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
          <Text weight="Medium">
            {formatDateAndTime(sessionData.date_and_time)}
          </Text>
        </Row>
        <Row>
          <Text color={theme.colors.text.muted} style={{ width: 90 }}>
            Seats
          </Text>
          <View>
            {cart.tickets.map((item) => (
              <Text weight="Medium" key={item.id}>
                {item.id} - {item.type}
              </Text>
            ))}
          </View>
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
            Total
          </Text>
          <Text weight="Medium" size={16}>
            R$ {calculateCartAmountPrice(cart.tickets)}
          </Text>
        </Row>
      </BottomInfo>
      <TearLine />
      <Footer>
        <Button
          label="Continue"
          onPress={openPaymentSheet}
          loading={loading}
          disabled={loading}
        />
      </Footer>
      <DetachedModal text="Your order is complete!" visible={modalVisible}>
        <LottieView
          source={Confirmed}
          autoPlay
          loop={false}
          onAnimationFinish={() => {
            setModalVisible(false);
            goHome();
          }}
          style={{
            width: '100%',
            height: 200,
          }}
        />
      </DetachedModal>
    </Container>
  );
};
