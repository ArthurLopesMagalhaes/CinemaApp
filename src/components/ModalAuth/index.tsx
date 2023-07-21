import { forwardRef, useMemo, useState } from "react";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { useTheme } from "styled-components";

import { Button } from "../Button";
import { Divider } from "../Divider";
import { Text } from "../Text";

import { ButtonBox, Content, Input, styles } from "./styles";

export const ModalAuth = forwardRef<BottomSheet>((props, ref) => {
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
      <BottomSheetScrollView>
        <Content>
          <Text weight="Bold" size={24}>
            Login
          </Text>
          <Text color={theme.colors.text.muted} size={16}>
            Access to purchase tickets
          </Text>
          <Input placeholder="Email" />
          <Divider top={10} />
          <Input placeholder="Password" />
          <Divider top={10} />
          <ButtonBox>
            <Button label="Continue" onPress={handleLogin} loading={loading} />
          </ButtonBox>
        </Content>
      </BottomSheetScrollView>
    </BottomSheet>
  );
});
