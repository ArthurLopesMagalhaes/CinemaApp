import { useEffect, useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { useCameraPermission } from "react-native-vision-camera";

import LottieView from "lottie-react-native";

// import { QrCode } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

import BackSvg from "@assets/back.svg";
import LogoutSvg from "@assets/logout.svg";
import Sad from "@assets/lottie/sad.json";

import { Container, Content, Footer, ScanButton } from "./styles";

import { DetachedModal } from "@components/DetachedModal";
import { Divider } from "@components/Divider";
import { EmptyList } from "@components/EmptyList";
import { Loading } from "@components/Loading";
import { Text } from "@components/Text";
import { TopBar } from "@components/TopBar";

import { cineAPI } from "@services/api";
import { supabase } from "@services/supabase";

import { TicketListItem } from "./components/TicketListItem";

import { useSessionStore } from "@stores/session";
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
  const navigation = useNavigation();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const clearSession = useSessionStore((state) => state.clearSession);

  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
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
    clearSession();
  };

  const getUserTickets = async () => {
    const response = await cineAPI.getTickets(user.id);
    setTickets(response.data);
    setLoading(false);
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

  return (
    <Container>
      <TopBar
        title="Profile"
        leftIcon={BackSvg}
        rightIcon={LogoutSvg}
        onLeftIconPress={goBack}
        onRightIconPress={() => setModalVisible(true)}
      />
      <Content>
        <Text size={22} weight="Bold">
          Welcome, {user.name} 👋
        </Text>

        <Divider top={20} />
        {loading ? (
          <Loading />
        ) : (
          <FlatList
            data={tickets}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flex: 1 }}
            ListEmptyComponent={
              <EmptyList text="No tickets yet">
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
            }
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
        )}
      </Content>

      {user.function === "admin" && (
        <Footer>
          <ScanButton onPress={handleQrCodeScanPress}>
            {/* <QrCode color="#ffff" size={40} /> */}
          </ScanButton>
        </Footer>
      )}
      <DetachedModal
        onConfirm={signOutUser}
        onCancel={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </Container>
  );
};
