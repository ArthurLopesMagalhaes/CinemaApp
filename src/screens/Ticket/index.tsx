import QRCode from "react-native-qrcode-svg";

import { useTheme } from "styled-components";

import { useNavigation, useRoute } from "@react-navigation/native";

import CloseSvg from "@assets/close.svg";

import {
  BottomView,
  Container,
  LabelsRow,
  QrCodeContainer,
  QrCodeContent,
  TicketInfos,
} from "./styles";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { TearLine } from "@components/TearLine";
import { Text } from "@components/Text";
import { TopBar } from "@components/TopBar";

import { formatDateAndTime } from "@utils/formatDateAndTime";

export type TicketInfo = {
  id: string;
  date: string;
  seat: string;
  type: string;
};

type RouteParams = {
  ticketInfo: TicketInfo;
};

export const Ticket = () => {
  const route = useRoute();
  const theme = useTheme();
  const navigation = useNavigation();

  const { ticketInfo } = route.params as RouteParams;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Container contentContainerStyle={{ flex: 1 }}>
      <TopBar
        title="Your Ticket"
        rightIcon={CloseSvg}
        onRightIconPress={goBack}
      />

      <QrCodeContent>
        <QrCodeContainer>
          {/* <QrCodeImage source={QrCodePng} /> */}
          <QRCode value={ticketInfo.id} size={200} />
        </QrCodeContainer>
        <Divider top={16} />
        <Text color={theme.colors.text.muted}>
          Show this code to the gatekeeper at the cinema
        </Text>
      </QrCodeContent>
      <Divider top={16} />
      <TearLine />
      <BottomView>
        <TicketInfos>
          <Text weight="Bold" size={18}>
            The Batman
          </Text>
          <Divider top={16} />

          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Date
            </Text>
            <Text>{formatDateAndTime(ticketInfo.date)}</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Seat
            </Text>
            <Text>{ticketInfo.seat}</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Type
            </Text>
            <Text>{ticketInfo.type}</Text>
          </LabelsRow>
        </TicketInfos>
      </BottomView>
    </Container>
  );
};
