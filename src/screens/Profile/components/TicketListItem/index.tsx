import { Text } from "../../../../components/Text";
import { Container } from "./styles";

type TicketListItemType = {
  data: {
    id: string;
    movie_id: string | null;
    order_id: string | null;
    seat_position: string | null;
    ticket_type: string;
    user_id: string | null;
  };
  onPress: () => void;
};

export const TicketListItem = ({ data, onPress }: TicketListItemType) => {
  return (
    <Container onPress={onPress}>
      <Text>Hi</Text>
    </Container>
  );
};
