import { forwardRef, useMemo } from "react";

import { Content, DateTimeContainer, styles } from "./styles";

import { Text } from "@components/Text";

import { formatDate } from "@utils/formatDate";

import { SessionsData } from "../..";

import {
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";

type Props = {
  data: SessionsData[];
  onPress: (session: SessionsData) => void;
};

export const SelectDateAndTimeModal = forwardRef(
  (props: Props, ref: React.Ref<BottomSheet>) => {
    const snapPoints = useMemo(() => ["50%"], []);

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
          <Text size={20} weight="Bold">
            Select one session
          </Text>
          <BottomSheetScrollView>
            {props.data.map((session) => (
              <DateTimeContainer
                onPress={() => props.onPress(session)}
                key={session.id}
              >
                <Text>{formatDate(session.date_and_time)}</Text>
              </DateTimeContainer>
            ))}
          </BottomSheetScrollView>
        </Content>
      </BottomSheet>
    );
  },
);
