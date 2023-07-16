import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
