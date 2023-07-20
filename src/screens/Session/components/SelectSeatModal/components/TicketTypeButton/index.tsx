import { useTheme } from "styled-components";
import { Text } from "../../../../../../components/Text";
import { Container } from "./styles";
import { TicketType } from "../../../../../../utils/ticketType";
import { useContext } from "react";
import { SessionContext } from "../../../../../../contexts/SessionContext";
import { Types } from "../../../../../../reducers/ticketReducer";

type TicketTypeButtonProps = {
  type: TicketType;
  price: number;
  onPress: () => void;
};

export const TicketTypeButton = ({
  type,
  price,
  onPress,
}: TicketTypeButtonProps) => {
  const theme = useTheme();

  return (
    <Container onPress={onPress}>
      <Text size={16} weight="Medium">
        {type}
      </Text>
      <Text size={16} weight="Medium" color={theme.colors.text.muted}>
        R$ {price}
      </Text>
    </Container>
  );
};
