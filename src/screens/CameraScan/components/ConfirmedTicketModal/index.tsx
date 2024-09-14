import LottieView from 'lottie-react-native';

import Confirmed from '@assets/lottie/confirmed.json';

import { DetachedModal } from '@components/DetachedModal';

type InvalidTicketModalProps = {
  visible: boolean;
  onAnimationFinish: () => void;
};

export const ConfirmedTicketModal = ({
  visible,
  onAnimationFinish,
}: InvalidTicketModalProps) => {
  return (
    <DetachedModal visible={visible}>
      <LottieView
        onAnimationFinish={onAnimationFinish}
        source={Confirmed}
        duration={1000}
        autoPlay
        loop={false}
        style={{ width: 200, height: 200, alignSelf: 'center' }}
      />
    </DetachedModal>
  );
};
