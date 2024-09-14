import { Modal, TouchableWithoutFeedback } from 'react-native';

import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  ModalBody,
  Overlay,
} from './styles';

import { Text } from '@components/Text';

type Props = {
  text?: string;
  visible: boolean;
  onCancel?: () => void;
  onConfirm?: () => void;
  children?: React.ReactNode;
};

export const DetachedModal = ({
  text,
  visible,
  onCancel,
  onConfirm,
  children,
}: Props) => {
  return (
    <Modal
      animationType="fade"
      transparent
      statusBarTranslucent // Android only
      visible={visible}
      onRequestClose={onCancel}
    >
      <Overlay activeOpacity={1} onPress={onCancel}>
        <TouchableWithoutFeedback>
          <ModalBody>
            {text && (
              <Text weight="Regular" size={18} style={{ textAlign: 'center' }}>
                {text}
              </Text>
            )}
            {children}
            {(onCancel || onConfirm) && (
              <ButtonsContainer>
                <ConfirmButton onPress={onConfirm}>
                  <Text size={16}>Confirm</Text>
                </ConfirmButton>
                <CancelButton onPress={onCancel}>
                  <Text size={16}>Cancel</Text>
                </CancelButton>
              </ButtonsContainer>
            )}
          </ModalBody>
        </TouchableWithoutFeedback>
      </Overlay>
    </Modal>
  );
};
