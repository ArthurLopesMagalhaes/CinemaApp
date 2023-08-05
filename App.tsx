import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import React from "react";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/global/theme";

import { StatusBar } from "react-native";
import { AppRoutes } from "./src/routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <AppRoutes />
    </ThemeProvider>
  );
}

export default gestureHandlerRootHOC(App);
