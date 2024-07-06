import RNBootSplash from "react-native-bootsplash";

import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

export const AppRoutes = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
      <StackRoutes />
    </NavigationContainer>
  );
};
