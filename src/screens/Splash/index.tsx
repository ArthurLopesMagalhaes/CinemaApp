import { Image, ImageBackground, View } from "react-native";
import { StatusBar } from "react-native";

import LogoPng from "../../assets/logo.png";
import OverlayPng from "../../assets/overlay.png";
import { ImageBg } from "./styles";
import { Text } from "../../components/Text";

export const Splash = () => {
  return (
    <ImageBg source={OverlayPng} blurRadius={60}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Image source={LogoPng} />
    </ImageBg>
  );
};
