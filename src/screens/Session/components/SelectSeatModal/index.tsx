import { BottomSheetBackdrop, BottomSheetProps } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";

import { useTheme } from "styled-components";
import { Content, TextsBox, styles } from "./styles";
import { Text } from "../../../../components/Text";
import { TicketTypeButton } from "./components/TicketTypeButton";
import { forwardRef, useContext, useMemo } from "react";
import { SessionContext } from "../../../../contexts/SessionContext";
import { Types } from "../../../../reducers/ticketReducer";
import { useTicketStore } from "../../../../stores/tickets";

export const ModalSelectSeat = forwardRef(
  (props, ref: React.Ref<BottomSheet>) => {
    const theme = useTheme();
    const snapPoints = useMemo(() => ["50%"], []);

    const addTicket = useTicketStore((state) => state.addTicket);

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
              8th row, 7th seat
            </Text>
          </TextsBox>
          <TicketTypeButton
            type="Adult"
            price={80}
            onPress={() => addTicket({ id: "1", type: "Adult" })}
          />
          <TicketTypeButton
            type="Student"
            price={50}
            onPress={() => addTicket({ id: "2", type: "Student" })}
          />
        </Content>
      </BottomSheet>
    );
  }
);
