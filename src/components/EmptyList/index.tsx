import { ElementType } from "react";
import { SvgProps } from "react-native-svg";

import { LottieViewProps } from "lottie-react-native";

import { Container } from "./styles";

import { Text } from "@components/Text";

type EmptyListProps = {
  children?: React.ReactNode;
  text?: string;
};

export const EmptyList = ({ children, text }: EmptyListProps) => {
  return (
    <Container>
      <>
        {children}
        <Text>{text}</Text>
      </>
    </Container>
  );
};
