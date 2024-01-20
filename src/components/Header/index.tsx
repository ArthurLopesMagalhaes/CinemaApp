import { Image, TouchableOpacity } from "react-native";

import { useTheme } from "styled-components";

import LocationSvg from "@assets/location.svg";
import Logo from "@assets/logo.png";

import { Avatar, ButtonBox, Container, ImageBox, LocationBox } from "./styles";

import { Button } from "../Button";
import { Text } from "../Text";

type HeaderProps = {
  onButtonPress: () => void;
  userLogged: boolean;
};

export const Header = ({ onButtonPress, userLogged }: HeaderProps) => {
  const theme = useTheme();

  return (
    <Container>
      <ImageBox>
        <Image source={Logo} style={{ width: 33, height: 37 }} />
      </ImageBox>
      <LocationBox>
        <LocationSvg width={20} />
        <Text>CINE APP</Text>
      </LocationBox>
      <ButtonBox>
        {/* Use a userPhoto here instead of a button */}
        {userLogged ? (
          <TouchableOpacity onPress={onButtonPress}>
            <Avatar
              source={{ uri: "https://github.com/ArthurLopesMagalhaes.png" }}
            />
          </TouchableOpacity>
        ) : (
          <Button label={"Log In"} onPress={onButtonPress} />
        )}
      </ButtonBox>
    </Container>
  );
};
