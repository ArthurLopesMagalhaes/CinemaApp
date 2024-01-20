import {
  Controller,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";
import { TextInputProps } from "react-native";

import { useTheme } from "styled-components";

import { Input } from "./styles";

import { Text } from "../Text";

type InputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = TextInputProps & UseControllerProps<TFieldValues, TName>;

export const UncontrolledInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  name,
  ...rest
}: InputProps<TFieldValues, TName>) => {
  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => (
        <>
          <Input
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            error={!!error}
            {...rest}
          />
          {error && (
            <Text color={theme.colors.semantic.warning}>{error.message}</Text>
          )}
        </>
      )}
    />
  );
};
