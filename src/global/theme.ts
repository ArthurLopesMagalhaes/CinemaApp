import { DefaultTheme } from 'styled-components/native';

export const theme: DefaultTheme = {
  colors: {
    primary: {
      main: '#FF8036',
      gradient: '#FF8036',
    },
    background: {
      main: '#1A2232',
    },
    surface: {
      main: '#1F293D',
      glass: '#1F293DB3',
      fade: '',
      deep: '#253554',
      mainPressed: '#202B40',
    },
    text: {
      main: '#FFFFFF',
      muted: '#637394',
      onPrimary: '#FFFFFF',
    },
    border: {
      main: '#6D9EFF1A',
    },
    icon: {
      main: '#637394',
    },
    semantic: {
      positive: '#14CC52',
      warning: '#E5A117',
      disable: '#FF803699',
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
