import styled from "styled-components/native";

interface TextProps {
  weight?: "Regular" | "Medium" | "Bold";
  color?: string;
  size?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ weight }) =>
    weight ? `SF-Pro-Display-${weight}` : "SF-Pro-Display-Regular"};
  color: ${({ color }) => color || "#FFF"};
  font-size: ${({ size }) => (size ? `${size}px` : "14px")};
`;
