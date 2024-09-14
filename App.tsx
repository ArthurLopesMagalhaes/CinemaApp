import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import Config from 'react-native-config';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { ThemeProvider } from 'styled-components/native';

import { cineAPI } from '@services/api';
import { supabase } from '@services/supabase';

import { theme } from './src/global/theme';
import { AppRoutes } from './src/routes';

import { useSessionStore } from '@stores/session';
import { useUserStore } from '@stores/user';
import { StripeProvider } from '@stripe/stripe-react-native';

function App() {
  const setSession = useSessionStore((state) => state.setSession);
  const setUser = useUserStore((state) => state.setUser);

  const getUserData = async () => {
    const user = await cineAPI.getUser();
    if (user.data) {
      setUser({
        id: user.data.id,
        email: user.data.email,
        name: user.data.name,
        function: user.data.function,
      });
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        setSession(session);
      }
    });
    getUserData();
  }, []);

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
