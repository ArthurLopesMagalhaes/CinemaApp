import { SeatProps } from "../screens/Session/components/Seat";
import { theme } from "../global/theme";

export const DefineColor = (status: string) => {
  switch (status) {
    case "Available":
      return theme.colors.surface.deep;
    case "Occupied":
      return theme.colors.surface.main;
    case "Chosen":
      return theme.colors.primary.main;

    default:
      break;
  }
};
