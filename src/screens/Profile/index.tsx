import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
// import { QrCode } from "phosphor-react-native";
import { useCameraPermission } from "react-native-vision-camera";

import { useNavigation } from "@react-navigation/native";

import BackSvg from "@assets/back.svg";
import LogoutSvg from "@assets/logout.svg";

import { Container, Content, Footer, ScanButton } from "./styles";

import { Divider } from "@components/Divider";
import { Text } from "@components/Text";
import { TopBar } from "@components/TopBar";

import { cineAPI } from "@services/api";
import { supabase } from "@services/supabase";

import { TicketListItem } from "./components/TicketListItem";

import { useUserStore } from "@stores/user";

export type TicketType = {
  id: string;
  movie_id: string;
  movies: {
    image_url: string;
    title: string;
  } | null;
  order_id: string;
  seat_position: string;
  sessions: { date_and_time: string } | null;
  ticket_type: string;
  user_id: string;
  status: string;
};

export const Profile = () => {
  const { hasPermission, requestPermission } = useCameraPermission();
  console.log(hasPermission);

  const navigation = useNavigation();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const [tickets, setTickets] = useState<TicketType[] | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const goToTicketScreen = (
    id: string,
    date: string,
    seat: string,
    type: string,
  ) => {
    console.log(date);
    navigation.navigate("Ticket", {
      ticketInfo: {
        id,
        date,
        seat,
        type,
      },
    });
  };

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return Alert.alert("Error", "Unable to logout, try again");
    }
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
    clearUser();
  };

  const getUserTickets = async () => {
    const response = await cineAPI.getTickets(user.id);
    setTickets(response.data);
  };

  const handleQrCodeScanPress = () => {
    if (!hasPermission) {
      return requestPermission();
    }
    navigation.navigate("CameraScan");
  };

  useEffect(() => {
    getUserTickets();
  }, []);

  console.log(user);

  return (
    <Container>
      <TopBar
        title="Profile"
        leftIcon={BackSvg}
        rightIcon={LogoutSvg}
        onLeftIconPress={goBack}
        onRightIconPress={signOutUser}
      />
      <Content>
        <Text size={22} weight="Bold">
          Welcome, Arthur 👋
        </Text>

        <Divider top={20} />
        <FlatList
          data={tickets}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <TicketListItem
              data={item}
              onPress={() =>
                goToTicketScreen(
                  item.id,
                  item.sessions!.date_and_time,
                  item.seat_position,
                  item.ticket_type,
                )
              }
            />
          )}
          ItemSeparatorComponent={() => <Divider top={12} />}
        />
      </Content>
      {user.role === "admin" && (
        <Footer>
          <ScanButton onPress={handleQrCodeScanPress}>
            {/* <QrCode color="#ffff" size={40} /> */}
          </ScanButton>
        </Footer>
      )}
    </Container>
  );
};
