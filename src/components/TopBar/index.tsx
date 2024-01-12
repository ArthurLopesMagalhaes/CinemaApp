import { TouchableOpacity } from "react-native";
import { SvgProps } from "react-native-svg";
import { useTheme } from "styled-components";

import { Text } from "../Text";

import { Container, Left, Medium, Right } from "./styles";

type TopBarProps = {
  title: string;
  subtitle?: string;
  leftIcon?: React.FC<SvgProps>;
  rightIcon?: React.FC<SvgProps>;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};

export const TopBar = ({
  title,
  subtitle,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  onLeftIconPress,
  onRightIconPress,
}: TopBarProps) => {
  const theme = useTheme();
  return (
    <Container>
      <TouchableOpacity onPress={onLeftIconPress}>
        <Left>{LeftIcon && <LeftIcon />}</Left>
      </TouchableOpacity>
      <Medium>
        <Text size={18} weight="Bold" style={{ textAlign: "center" }}>
          {title}
        </Text>

        {subtitle && <Text color={theme.colors.text.muted}>{subtitle}</Text>}
      </Medium>
      <TouchableOpacity onPress={onRightIconPress}>
        <Right>{RightIcon && <RightIcon />}</Right>
      </TouchableOpacity>
    </Container>
  );
};
