import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Splash } from "./src/screens/Splash";
import React from "react";
import { Home } from "./src/screens/Home";
import { Session } from "./src/screens/Session";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/global/theme";
import { StackRoutes } from "./src/routes/stack.routes";
import { StatusBar } from "react-native";
import { AppRoutes } from "./src/routes";
import { Loading } from "./src/components/Loading";

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
