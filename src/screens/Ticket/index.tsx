import { useTheme } from "styled-components";
import { useRoute } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";

import {
  BottomView,
  ButtonsBox,
  Container,
  LabelsRow,
  QrCodeContainer,
  QrCodeContent,
  QrCodeImage,
  RefundButton,
  TicketInfos,
} from "./styles";

import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { TearLine } from "../../components/TearLine";
import { Text } from "../../components/Text";
import { TopBar } from "../../components/TopBar";

import CloseSvg from "../../assets/close.svg";
import QrCodePng from "../../assets/qrcode.png";
import { formatDate } from "../../utils/formatDate";

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

  const { ticketInfo } = route.params as RouteParams;

  return (
    <Container contentContainerStyle={{ flex: 1 }}>
      <TopBar title="Your Ticket" rightIcon={CloseSvg} />

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
            <Text>{formatDate(ticketInfo.date)}</Text>
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
        <ButtonsBox>
          <RefundButton activeOpacity={0.75}>
            <Text weight="Bold">Refund</Text>
          </RefundButton>
          <Button label="Send" />
        </ButtonsBox>
      </BottomView>
    </Container>
  );
};
