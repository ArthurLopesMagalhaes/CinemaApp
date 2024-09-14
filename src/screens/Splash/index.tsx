import { Image, StatusBar } from 'react-native';

import LogoPng from '@assets/logo.png';
import OverlayPng from '@assets/overlay.png';

import { ImageBg } from './styles';

export const Splash = () => {
  return (
    <ImageBg source={OverlayPng} blurRadius={60}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Image source={LogoPng} />
    </ImageBg>
  );
};
