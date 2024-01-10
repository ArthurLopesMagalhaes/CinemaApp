import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import React from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/global/theme";

import { StatusBar } from "react-native";
import { AppRoutes } from "./src/routes";
import { StripeProvider } from "@stripe/stripe-react-native";
import Config from "react-native-config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StripeProvider publishableKey={Config.STRIPE_PUBLISHABLE_KEY as string}>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />

        <AppRoutes />
      </StripeProvider>
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
