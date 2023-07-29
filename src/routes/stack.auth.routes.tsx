import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";

const Stack = createNativeStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: "slide_from_right",
    }}
  >
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);
