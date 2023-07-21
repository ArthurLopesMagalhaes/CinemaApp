import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";

import { Text } from "../Text";

import { Container, Left, Medium, Right } from "./styles";

type TopBarProps = {
  title: string;
  subtitle?: string;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
};

export const TopBar = ({
  title,
  subtitle,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: TopBarProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Left>{LeftIcon && <LeftIcon />}</Left>
      <Medium>
        <Text size={18} weight="Bold">
          {title}
        </Text>

        {subtitle && <Text color={theme.colors.text.muted}>{subtitle}</Text>}
      </Medium>
      <Right>{RightIcon && <RightIcon />}</Right>
    </Container>
  );
};
