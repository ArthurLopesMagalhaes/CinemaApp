import { ActivityIndicator, TouchableOpacityProps } from "react-native";

import { Container } from "./styles";

import { Text } from "../Text";

export type ButtonProps = TouchableOpacityProps & {
  label: string;
  loading?: boolean;
};

export const Button = ({ label, loading, ...rest }: ButtonProps) => {
  return (
    <Container
      {...rest}
      activeOpacity={0.75}
      disabled={loading}
      loading={loading}
    >
      {loading ? (
        <ActivityIndicator size={24} />
      ) : (
        <Text weight="Bold" size={14}>
          {label}
        </Text>
      )}
    </Container>
  );
};
