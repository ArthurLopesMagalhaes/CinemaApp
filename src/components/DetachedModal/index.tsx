import { Modal, TouchableWithoutFeedback } from "react-native";

import {
  ButtonsContainer,
  CancelButton,
  ConfirmButton,
  ModalBody,
  Overlay,
} from "./styles";

import { Text } from "@components/Text";

type Props = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export const DetachedModal = ({ visible, onCancel, onConfirm }: Props) => {
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
            <Text weight="Regular" size={18}>
              Are you sure you want to logout?
            </Text>
            <ButtonsContainer>
              <ConfirmButton onPress={onConfirm}>
                <Text size={16}>Confirm</Text>
              </ConfirmButton>
              <CancelButton onPress={onCancel}>
                <Text size={16}>Cancel</Text>
              </CancelButton>
            </ButtonsContainer>
          </ModalBody>
        </TouchableWithoutFeedback>
      </Overlay>
    </Modal>
  );
};
