import { Button } from "react-native";

import { Container } from "./styles";
import { Text } from "../../components/Text";

import { supabase } from "../../services/supabase";
import { useNavigation } from "@react-navigation/native";

export const Profile = () => {
  const navigation = useNavigation();

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };

  return (
    <Container>
      <Text>Profile</Text>
      <Button title="Sign Out" onPress={signOutUser} />
    </Container>
  );
};
