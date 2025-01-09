import type { DefaultTheme } from 'styled-components/native';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: '#C8102E',
      gradient: '#FF5733',
    },
    background: {
      main: '#0B0B0D',
    },
    surface: {
      main: '#1C1C1E',
      glass: '#101013 ',
      fade: '#3A3F4C',
      deep: '#4B5768 ',
      mainPressed: '#262A35',
    },
    text: {
      main: '#E5E5E5',
      muted: '#A5A5A5',
      onPrimary: '#FFFFFF',
    },
    border: {
      main: '#4B5768',
    },
    icon: {
      main: '#A5A5A5',
    },
    semantic: {
      positive: '#14CC52',
      warning: '#E5A117',
      disable: '#C8102E99',
    },
  },
  fontSize: {
    sm: 12,
    md: 16,
    lg: 26,
    xxl: 32,
  },
  fontFamily: {
    regular: 'SF-Pro-Display-Regular',
    medium: 'SF-Pro-Display-Medium',
    bold: 'SF-Pro-Display-Bold',
  },
};
