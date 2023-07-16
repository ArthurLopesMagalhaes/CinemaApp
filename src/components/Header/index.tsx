import { Image } from "react-native";
import { useTheme } from "styled-components";

import LocationSvg from "../../assets/location.svg";
import Logo from "../../assets/logo.png";
import { Button } from "../Button";
import { Text } from "../Text";
import { ButtonBox, Container, ImageBox, LocationBox } from "./styles";

type HeaderProps = {
  onButtonPress: () => void;
};

export const Header = ({ onButtonPress }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Container>
      <ImageBox>
        <Image source={Logo} style={{ width: 33, height: 37 }} />
      </ImageBox>
      <LocationBox>
        <LocationSvg width={20} />
        <Text>Viçosa - MG</Text>
      </LocationBox>
      <ButtonBox>
        <Button label="Log In" onPress={onButtonPress} />
      </ButtonBox>
    </Container>
  );
};
