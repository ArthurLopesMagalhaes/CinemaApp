import { useState } from "react";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useTheme } from "styled-components";
import { supabase } from "../../services/supabase";

import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";

import { ButtonBox, Content, Input, FormWrapper } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "../../stores/user";
import { cineAPI } from "../../services/api";
import { AuthError } from "@supabase/supabase-js";

export const SignUp = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const setUser = useUserStore((state) => state.setUser);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await cineAPI.signUpUser(name, email, password);
      if (response.error) {
        return setError(response.error);
      }

      if (response.data.user) {
        setUser({
          id: response.data.user.id,
          email: response.data.user.email,
          role: response.data.user.role,
        });
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  return (
    <Content>
      <FormWrapper>
        <Text weight="Bold" size={24}>
          Create an account
        </Text>
        <Text color={theme.colors.text.muted} size={16}>
          Access your tickets
        </Text>
        <Divider top={16} />
        <Input placeholder="Name" onChangeText={setName} />
        <Divider top={10} />
        <Input placeholder="Email" onChangeText={setEmail} />
        <Divider top={10} />
        <Input placeholder="Password" onChangeText={setPassword} />
        <Divider top={10} />
        <ButtonBox>
          <Button label="Continue" onPress={handleSignUp} loading={loading} />
        </ButtonBox>
      </FormWrapper>

      <Divider top={16} />
      <Text
        size={16}
        color={theme.colors.text.muted}
        onPress={navigateToSignIn}
      >
        Sign In
      </Text>
    </Content>
  );
};
