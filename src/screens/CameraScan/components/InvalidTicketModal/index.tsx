import LottieView from "lottie-react-native";

import Denied from "@assets/lottie/denied.json";

import { DetachedModal } from "@components/DetachedModal";

type InvalidTicketModalProps = {
  visible: boolean;
  onAnimationFinish: () => void;
};

export const InvalidTicketModal = ({
  visible,
  onAnimationFinish,
}: InvalidTicketModalProps) => {
  return (
    <DetachedModal visible={visible}>
      <LottieView
        onAnimationFinish={onAnimationFinish}
        source={Denied}
        duration={1000}
        autoPlay
        loop={false}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
        }}
      />
    </DetachedModal>
  );
};
