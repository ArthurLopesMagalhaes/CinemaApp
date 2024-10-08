import { forwardRef, useMemo } from 'react';

import { useTheme } from 'styled-components';

import { Content, TextsBox, styles } from './styles';

import { Text } from '@components/Text';

import { TicketTypeButton } from './components/TicketTypeButton';

import { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import BottomSheet from '@gorhom/bottom-sheet';
import { useCartStore } from '@stores/cart';

type ModalSelectSeatProps = {
  seat: string;
  sessionId: string;
  afterSelection: () => void;
};

export const ModalSelectSeat = forwardRef(
  (props: ModalSelectSeatProps, ref: React.Ref<BottomSheet>) => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ['50%'], []);

    const addTicket = useCartStore((state) => state.addTicket);

    const handleSelection = (
      sessionId: string,
      seat: string,
      ticketType: 'Adult' | 'Student',
    ) => {
      addTicket(sessionId, {
        id: seat,
        type: ticketType,
      });
      props.afterSelection();
    };

    return (
      <BottomSheet
        ref={ref}
        index={-1}
        snapPoints={snapPoints}
        backgroundStyle={styles.backgroundStyle}
        handleIndicatorStyle={styles.indicator}
        enablePanDownToClose
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            pressBehavior="close"
            appearsOnIndex={0}
            disappearsOnIndex={-1}
          />
        )}
      >
        <Content>
          <TextsBox>
            <Text size={24} weight="Bold">
              Select ticket type
            </Text>
            <Text size={16} color={theme.colors.text.muted}>
              {props.seat}
            </Text>
          </TextsBox>
          <TicketTypeButton
            type="Adult"
            price={18}
            onPress={() =>
              handleSelection(props.sessionId, props.seat, 'Adult')
            }
          />
          <TicketTypeButton
            type="Student"
            price={9}
            onPress={() =>
              handleSelection(props.sessionId, props.seat, 'Student')
            }
          />
        </Content>
      </BottomSheet>
    );
  },
);
