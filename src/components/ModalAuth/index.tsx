import { forwardRef, useMemo, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useTheme } from "styled-components";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { SignIn } from "../SignIn";
import { SignUp } from "../SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export const ModalAuth = forwardRef<BottomSheet>((props, ref) => {
  const navigate = useNavigation();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const snapPoints = useMemo(() => ["50%"], []);
  const Stack = createNativeStackNavigator();

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      backgroundStyle={styles.backgroundStyle}
      handleIndicatorStyle={styles.indicator}
      enablePanDownToClose
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          pressBehavior="close"
          appearsOnIndex={0}
          disappearsOnIndex={-1}
        />
      )}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </BottomSheet>
  );
});
