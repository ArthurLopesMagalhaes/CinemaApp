import { Image, TouchableOpacity } from "react-native";

import { useTheme } from "styled-components";

import LocationSvg from "@assets/location.svg";
import Logo from "@assets/logo.png";
import UserPng from "@assets/user-placeholder.png";

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
        <Image source={Logo} style={{ width: 40, height: 40 }} />
      </ImageBox>
      <LocationBox>
        <LocationSvg width={20} />
        <Text>CINE APP</Text>
      </LocationBox>
      <ButtonBox>
        {userLogged ? (
          <TouchableOpacity onPress={onButtonPress}>
            <Avatar source={UserPng} />
          </TouchableOpacity>
        ) : (
          <Button label={"Log In"} onPress={onButtonPress} />
        )}
      </ButtonBox>
    </Container>
  );
};
