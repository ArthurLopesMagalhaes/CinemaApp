import { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";
import { forwardRef, useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { Content, TextsBox, TicketTypeButton, styles } from "./styles";
import { Text } from "../../../../components/Text";

export const ModalSelectSeat = forwardRef<BottomSheet>((props, ref) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const snapPoints = useMemo(() => ["50%"], []);

  const handleLogin = () => {
    setLoading(true);
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
            8th row, 7th seat
          </Text>
        </TextsBox>
        <TicketTypeButton>
          <Text size={16} weight="Medium">
            Adult
          </Text>
          <Text size={16} weight="Medium" color={theme.colors.text.muted}>
            R$ 80
          </Text>
        </TicketTypeButton>
        <TicketTypeButton>
          <Text size={16} weight="Medium">
            Child
          </Text>
          <Text size={16} weight="Medium" color={theme.colors.text.muted}>
            R$ 80
          </Text>
        </TicketTypeButton>
        <TicketTypeButton>
          <Text size={16} weight="Medium">
            Student
          </Text>
          <Text size={16} weight="Medium" color={theme.colors.text.muted}>
            R$ 80
          </Text>
        </TicketTypeButton>
      </Content>
    </BottomSheet>
  );
});
