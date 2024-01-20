import {
  Container,
  InfoBox,
  InfoBoxBottom,
  InfoBoxTop,
  MovieImg,
  Overlay,
} from "./styles";

import { Text } from "@components/Text";

import { formatDate } from "@utils/formatDate";

import { TicketType } from "../..";

type TicketListItemType = {
  data: TicketType;
  onPress: () => void;
};

export const TicketListItem = ({ data, onPress }: TicketListItemType) => {
  return (
    <Container onPress={onPress}>
      <Overlay overlay={data.status === "closed"} />
      <MovieImg
        source={{
          uri: data.movies?.image_url,
        }}
      />
      <InfoBox>
        <InfoBoxTop>
          <Text
            size={18}
            weight="Medium"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {data.movies?.title}
          </Text>
        </InfoBoxTop>
        <InfoBoxBottom>
          <Text>{formatDate(data.sessions.date_and_time)}</Text>
          <Text>
            {data.seat_position} - {data.ticket_type}
          </Text>
        </InfoBoxBottom>
      </InfoBox>
    </Container>
  );
};
