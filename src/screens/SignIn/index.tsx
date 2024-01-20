import { useState } from "react";
import { useForm } from "react-hook-form";
import { Alert } from "react-native";

import { useTheme } from "styled-components";
import { z } from "zod";

import { useNavigation } from "@react-navigation/native";

import { ButtonBox, Content, FormHeader, FormWrapper } from "./styles";

import { Button } from "@components/Button";
import { Divider } from "@components/Divider";
import { UncontrolledInput } from "@components/Input";
import { Text } from "@components/Text";

import { cineAPI } from "@services/api";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserFormSchema } from "@schemas/loginUserFormSchema";
import { useUserStore } from "@stores/user";

type FormData = z.infer<typeof loginUserFormSchema>;

export const SignIn = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const setUser = useUserStore((state) => state.setUser);

  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginUserFormSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await cineAPI.signInUser(data.email, data.password);
      if (response.error) {
        return Alert.alert("Error", response.error.message);
      }

      if (response.data.user) {
        const user = await cineAPI.getUser();

        setUser({
          id: response.data.user.id,
          email: response.data.user.email,
          name: user.data?.name,
          function: user.data?.function,
        });
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    } catch (error) {
      Alert.alert("Error", "An error occurred, please try again.");
    } finally {
      setLoading(false);
    }
  });

  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };

  return (
    <Content>
      <FormWrapper>
        <FormHeader>
          <Text weight="Bold" size={24}>
            Login
          </Text>
          <Text color={theme.colors.text.muted} size={16}>
            Access your tickets
          </Text>
        </FormHeader>
        <Divider top={16} />
        <UncontrolledInput
          name="email"
          control={control}
          placeholder="E-mail"
          autoCapitalize="none"
        />
        <Divider top={16} />
        <UncontrolledInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
        />
        <Divider top={16} />
        <ButtonBox>
          <Button label="Continue" onPress={onSubmit} loading={loading} />
        </ButtonBox>
      </FormWrapper>

      <Divider top={16} />
      <Text
        size={16}
        color={theme.colors.text.muted}
        onPress={navigateToSignUp}
      >
        Sign Up
      </Text>
    </Content>
  );
};
