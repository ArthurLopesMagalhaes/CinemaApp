import { Button } from "react-native";

import { Container } from "./styles";
import { Text } from "../../components/Text";

import { supabase } from "../../services/supabase";
import { useNavigation } from "@react-navigation/native";
import { TopBar } from "../../components/TopBar";

import BackSvg from "../../assets/back.svg";
import LogoutSvg from "../../assets/logout.svg";

export const Profile = () => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Container>
      <TopBar
        title="Profile"
        leftIcon={BackSvg}
        rightIcon={LogoutSvg}
        onLeftIconPress={goBack}
        onRightIconPress={signOutUser}
      />

      <Button title="Sign Out" onPress={signOutUser} />
    </Container>
  );
};
