import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: {
        main: string;
        gradient: string;
      };
      background: {
        main: string;
      };
      surface: {
        main: string;
        glass: string;
        fade: string;
        deep: string;
        mainPressed: string;
      };
      text: {
        main: string;
        muted: string;
        onPrimary: string;
      };
      border: {
        main: string;
      };
      icon: {
        main: string;
      };
      semantic: {
        positive: string;
        warning: string;
        disable: string;
      };
    };

    fontSize: {
      sm: number;
      md: number;
      lg: number;
      xxl: number;
    };

    fontFamily: {
      regular: string;
      medium: string;
      bold: string;
    };
  }
}
