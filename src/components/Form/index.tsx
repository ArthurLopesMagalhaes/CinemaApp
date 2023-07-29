import { useTheme } from "styled-components";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Text } from "../Text";
import { ButtonBox, Content, Input } from "./styles";

export const Form = () => {
  const theme = useTheme();

  return (
    <Content>
      <Text weight="Bold" size={24}>
        Login
      </Text>
      <Text color={theme.colors.text.muted} size={16}>
        Access to purchase tickets
      </Text>
      <Divider top={16} />
      <Input placeholder="Email" />
      <Divider top={10} />
      <Input placeholder="Password" />
      <Divider top={10} />
      <ButtonBox>
        <Button label="Continue" />
      </ButtonBox>
      <Divider top={16} />
      <Text size={16} color={theme.colors.text.muted}>
        Sign Up
      </Text>
    </Content>
  );
};
