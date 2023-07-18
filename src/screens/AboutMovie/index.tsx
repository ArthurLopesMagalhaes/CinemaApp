import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import BackSvg from "../../assets/back.svg";
import { Button } from "../../components/Button";
import { Divider } from "../../components/Divider";
import { Text } from "../../components/Text";
import { TopBar } from "../../components/TopBar";

import {
  AboutMovieWrapper,
  Container,
  Content,
  Footer,
  LabelsRow,
} from "./styles";

export const AboutMovie = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Container>
      <TopBar title="The Batman" leftIcon={BackSvg} />
      <Content>
        <View style={{ height: 200, backgroundColor: "red" }} />
        <AboutMovieWrapper>
          <Text>
            When the Riddler, a sadistic serial killer, begins murdering key
            political figures in Gotham, Batman is forced to investigate the
            city's hidden corruption and question his family's involvement.
          </Text>
          <Divider top={16} />
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Certificate
            </Text>
            <Text>16+</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Runtime
            </Text>
            <Text>02:56</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Release
            </Text>
            <Text>2022</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Genre
            </Text>
            <Text>Action, Crime, Drama</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Director
            </Text>
            <Text>Matt Reeves</Text>
          </LabelsRow>
          <LabelsRow>
            <Text style={{ width: 80 }} color={theme.colors.text.muted}>
              Cast
            </Text>
            <Text style={{ flex: 1 }}>
              Robert Pattinson, Zoë Kravitz, Jeffrey Wright, Colin Farrell, Paul
              Dano, John Turturro, Andy Serkis, Peter Sarsgaard
            </Text>
          </LabelsRow>
        </AboutMovieWrapper>
      </Content>
      <Footer>
        <Button
          label="Select Session"
          onPress={() => navigation.navigate("Session")}
        />
      </Footer>
    </Container>
  );
};
