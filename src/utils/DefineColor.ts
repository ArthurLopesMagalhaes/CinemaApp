import { SeatProps } from "@screens/Session/components/Seat";

import { theme } from "@global/theme";

export const defineColor = (status: string) => {
  switch (status) {
    case "available":
      return theme.colors.surface.deep;
    case "occupied":
      return theme.colors.surface.main;
    case "chosen":
      return theme.colors.primary.main;
    case "empty":
      return theme.colors.background.main;

    default:
      break;
  }
};
