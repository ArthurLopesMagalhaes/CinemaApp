import { Container } from "./styles";
import { Text } from "../../components/Text";
import { cineAPI } from "../../services/api";
import { useCartStore } from "../../stores/cart";

export const Cart = () => {
  const cart = useCartStore((state) => state.cart);

  const updateSession = async () => {
    const response = await cineAPI.updateSession(cart.sessionId, [
      [{ id: "A1", status: "occupied", name: "A1" }],
    ]);
  };

  return (
    <Container>
      <Text>Cart</Text>
    </Container>
  );
};
