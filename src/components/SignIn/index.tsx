import { forwardRef, useMemo, useRef, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useTheme } from "styled-components";

import { Button } from "../Button";
import { Divider } from "../Divider";
import { Text } from "../Text";

import { ButtonBox, Content, Input } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { supabase } from "../../services/supabase";
import { useUserStore } from "../../stores/user";

export const SignIn = () => {
  const navigate = useNavigation();
  const theme = useTheme();
  const setUser = useUserStore((state) => state.setUser);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const signInUser = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setUser({ email: data.user?.email, role: data.user?.role });
    } catch (error) {
      console.log(error);
    }
  };

  const navigateToSignUp = () => {
    navigate.navigate("SignUp");
  };

  return (
    <BottomSheetScrollView style={{ backgroundColor: "#1D283D" }}>
      <Content>
        <Text weight="Bold" size={24}>
          Login
        </Text>
        <Text color={theme.colors.text.muted} size={16}>
          Access to purchase tickets
        </Text>
        <Divider top={16} />
        <Input placeholder="Email" onChangeText={setEmail} />
        <Divider top={10} />
        <Input placeholder="Password" onChangeText={setPassword} />
        <Divider top={10} />
        <ButtonBox>
          <Button label="Continue" onPress={signInUser} loading={loading} />
        </ButtonBox>
        <Divider top={16} />
        <Text
          size={16}
          color={theme.colors.text.muted}
          onPress={navigateToSignUp}
        >
          Sign Up
        </Text>
      </Content>
    </BottomSheetScrollView>
  );
};
