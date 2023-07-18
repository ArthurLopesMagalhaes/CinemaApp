import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutMovie } from "../screens/AboutMovie";
import { Home } from "../screens/Home";
import { Session } from "../screens/Session";
import { Splash } from "../screens/Splash";
import { Ticket } from "../screens/Ticket";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AboutMovie" component={AboutMovie} />
      <Stack.Screen name="Session" component={Session} />
      <Stack.Screen name="Ticket" component={Ticket} />
    </Stack.Navigator>
  );
};
