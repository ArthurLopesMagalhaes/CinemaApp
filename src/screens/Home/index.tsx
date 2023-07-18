import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useRef } from "react";


import { Divider } from "../../components/Divider";
import { Header } from "../../components/Header";
import { ModalAuth } from "../../components/ModalAuth";
import { MovieList } from "../../components/MovieList";
import { Text } from "../../components/Text";
import { Container, Content } from "./styles";

export const Home = () => {
  const ModalRef = useRef<BottomSheet>(null);

  const openModal = (bottomSheet: React.RefObject<BottomSheetMethods>) => {
    bottomSheet.current?.expand();
  };

  return (
    <Container>
      <Header onButtonPress={() => openModal(ModalRef)} />
      <Content>
        <Text weight="Bold" size={24}>
          Now in cinemas
        </Text>
        <Divider top={16} />
        <MovieList />
      </Content>
      <ModalAuth ref={ModalRef} />
    </Container>
  );
};
