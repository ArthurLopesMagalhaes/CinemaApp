import { TopBar } from "../../components/TopBar";
import {
  ButtonsBox,
  Container,
  LabelsRow,
  QrCodeContainer,
  QrCodeContent,
  QrCodeImage,
  RefundButton,
  TicketInfos,
} from "./styles";

import CloseSvg from "../../assets/close.svg";
import BackSvg from "../../assets/back.svg";
import QrCodePng from "../../assets/qrcode.png";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";
import { useTheme } from "styled-components";
import { TearLine } from "./components/TearLine";
import { Button } from "../../components/Button";

export const Ticket = () => {
  const theme = useTheme();

  return (
    <Container>
      <TopBar title="Your Ticket" rightIcon={CloseSvg} />

      <QrCodeContent>
        <QrCodeContainer>
          <QrCodeImage source={QrCodePng} />
        </QrCodeContainer>
        <Divider top={16} />
        <Text color={theme.colors.text.muted}>
          Show this code to the gatekeeper at the cinema
        </Text>
      </QrCodeContent>
      <Divider top={16} />
      <TearLine />
      <TicketInfos>
        <Text weight="Bold" size={18}>
          The Batman
        </Text>
        <Divider top={16} />
        <LabelsRow>
          <Text style={{ width: 80 }} color={theme.colors.text.muted}>
            Cinema
          </Text>
          <Text>Cine da Eskina</Text>
        </LabelsRow>
        <LabelsRow>
          <Text style={{ width: 80 }} color={theme.colors.text.muted}>
            Date
          </Text>
          <Text>6 April 2022, 14:40</Text>
        </LabelsRow>
        <LabelsRow>
          <Text style={{ width: 80 }} color={theme.colors.text.muted}>
            Hall
          </Text>
          <Text>6th</Text>
        </LabelsRow>
        <LabelsRow>
          <Text style={{ width: 80 }} color={theme.colors.text.muted}>
            Seat
          </Text>
          <Text>H7</Text>
        </LabelsRow>
        <LabelsRow>
          <Text style={{ width: 80 }} color={theme.colors.text.muted}>
            Cost
          </Text>
          <Text>R$ 20</Text>
        </LabelsRow>
        <ButtonsBox>
          <RefundButton activeOpacity={0.75}>
            <Text weight="Bold">Refund</Text>
          </RefundButton>
          <Button label="Send" />
        </ButtonsBox>
      </TicketInfos>
    </Container>
  );
};
