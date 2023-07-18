import { Container } from "./styles";

import LoaderSVG from "../../assets/loader.svg";
import Animated, {
  Easing,
  Keyframe,
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";

const keyframe = new Keyframe({
  0: {
    transform: [{ rotate: "0deg" }],
  },
  100: {
    transform: [{ rotate: "45deg" }],
  },
}).duration(2000);

export const Loading = () => {
  const rotation = useSharedValue(0);
  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1500,
        easing: Easing.linear,
      }),
      -1
    );
    return () => cancelAnimation(rotation);
  }, []);

  return (
    <Container>
      <Animated.View style={animatedStyles}>
        <LoaderSVG />
      </Animated.View>
    </Container>
  );
};
