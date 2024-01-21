import { forwardRef, useMemo } from "react";
import { View } from "react-native";

import LottieView from "lottie-react-native";

import Sad from "@assets/lottie/sad.json";

import { Content, DateTimeContainer, styles } from "./styles";

import { EmptyList } from "@components/EmptyList";
import { Text } from "@components/Text";

import { formatDate } from "@utils/formatDate";

import { SessionsData } from "../..";

import {
  BottomSheetBackdrop,
  BottomSheetFlatList,
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

          <BottomSheetFlatList
            data={props.data}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ flex: 1 }}
            ListEmptyComponent={() => (
              <EmptyList text="No sessions found">
                <LottieView
                  source={Sad}
                  autoPlay
                  loop
                  style={{
                    width: "100%",
                    height: 200,
                  }}
                />
              </EmptyList>
            )}
            renderItem={({ item }) => (
              <DateTimeContainer
                onPress={() => props.onPress(item)}
                activeOpacity={0.7}
              >
                <Text>{formatDate(item.date_and_time)}</Text>
              </DateTimeContainer>
            )}
          />
        </Content>
      </BottomSheet>
    );
  },
);
