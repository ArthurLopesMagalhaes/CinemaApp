import { Alert, Button, FlatList } from "react-native";

import { Container, Content } from "./styles";
import { Text } from "../../components/Text";

import { supabase } from "../../services/supabase";
import { useNavigation } from "@react-navigation/native";
import { TopBar } from "../../components/TopBar";

import BackSvg from "../../assets/back.svg";
import LogoutSvg from "../../assets/logout.svg";
import { useUserStore } from "../../stores/user";
import { Divider } from "../../components/Divider";
import { TicketListItem } from "./components/TicketListItem";
import { useEffect, useState } from "react";
import { cineAPI } from "../../services/api";

type TicketType = {
  id: string;
  movie_id: string | null;
  order_id: string | null;
  seat_position: string | null;
  ticket_type: string;
  user_id: string | null;
};

export const Profile = () => {
  const navigation = useNavigation();
  const user = useUserStore((state) => state.user);

  const [tickets, setTickets] = useState<TicketType[] | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const goToTicketScreen = () => {
    navigation.navigate("Ticket");
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
  };

  const getUserTickets = async () => {
    const response = await cineAPI.getTickets(user.id);
    setTickets(response.data);
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
          renderItem={({ item, index }) => (
            <TicketListItem data={item} onPress={goToTicketScreen} />
          )}
          ItemSeparatorComponent={() => <Divider top={12} />}
        />
      </Content>
    </Container>
  );
};
