import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AboutMovie } from "../screens/AboutMovie";
import { CameraScan } from "../screens/CameraScan";
import { Cart } from "../screens/Cart";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Session } from "../screens/Session";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";
import { Splash } from "../screens/Splash";
import { Ticket } from "../screens/Ticket";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="AboutMovie" component={AboutMovie} />
      <Stack.Screen name="Session" component={Session} />
      <Stack.Screen name="Ticket" component={Ticket} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="CameraScan" component={CameraScan} />
    </Stack.Navigator>
  );
};
