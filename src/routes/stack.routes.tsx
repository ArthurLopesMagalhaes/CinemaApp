import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutMovie } from "../screens/AboutMovie";
import { Home } from "../screens/Home";
import { Session } from "../screens/Session";
import { Splash } from "../screens/Splash";
import { Ticket } from "../screens/Ticket";
import { Profile } from "../screens/Profile";
import { Cart } from "../screens/Cart";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AboutMovie" component={AboutMovie} />
      <Stack.Screen name="Session" component={Session} />
      <Stack.Screen name="Ticket" component={Ticket} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};
