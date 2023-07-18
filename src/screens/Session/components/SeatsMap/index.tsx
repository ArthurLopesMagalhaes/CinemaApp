import { ReactNode } from "react";
import { Column, ScreenBox } from "./styles";
import { ScrollView, View } from "react-native";
import { Seat } from "../Seat";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import ScreenSVG from "../../../../assets/screen.svg";
import { Divider } from "../../../../components/Divider";
import { Text } from "../../../../components/Text";

type SeatsMapProps = {
  onSeatPress: () => void;
};

const NUM_OF_COLUMNS = 14;
const NUM_OF_ROWS = 20;

export const SeatsMap = ({ onSeatPress }: SeatsMapProps) => {
  const theme = useTheme();

  return (
    <>
      <ScreenBox>
        <Text style={{ textAlign: "center" }} color={theme.colors.text.muted}>
          SCREEN
        </Text>
        <ScreenSVG />
        <Divider top={24} />
      </ScreenBox>
      <ScrollView
        contentContainerStyle={{
          columnGap: 8,
          backgroundColor: theme.colors.background.main,
          padding: 16,
        }}
      >
        <ScrollView horizontal contentContainerStyle={{ columnGap: 8 }}>
          {Array(NUM_OF_COLUMNS)
            .fill(0)
            .map((_, i) => (
              <Column key={i}>
                {Array(NUM_OF_ROWS)
                  .fill(0)
                  .map((_, i) => (
                    <Seat
                      key={i}
                      status="Chosen"
                      number={i}
                      onPress={onSeatPress}
                    />
                  ))}
              </Column>
            ))}
        </ScrollView>
      </ScrollView>
    </>
  );
};
