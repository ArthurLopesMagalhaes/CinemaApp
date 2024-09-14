import { useEffect, useRef, useState } from 'react';
import {
  Alert,
  AppState,
  FlatList,
  Linking,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { useCameraPermission } from 'react-native-vision-camera';
import { AppStateStatus } from 'react-native/Libraries/AppState/AppState';

import LottieView from 'lottie-react-native';

import { useNavigation } from '@react-navigation/native';

import BackSvg from '@assets/back.svg';
import LogoutSvg from '@assets/logout.svg';
import Sad from '@assets/lottie/sad.json';
import QrCodeSvg from '@assets/qrcode.svg';

import { Container, Content, Footer, ScanButton } from './styles';

import { DetachedModal } from '@components/DetachedModal';
import { Divider } from '@components/Divider';
import { EmptyList } from '@components/EmptyList';
import { Loading } from '@components/Loading';
import { Text } from '@components/Text';
import { TopBar } from '@components/TopBar';

import { cineAPI } from '@services/api';
import { supabase } from '@services/supabase';

import { Filter, FilterType } from './components/Filter';
import { TicketListItem } from './components/TicketListItem';

import { useFirstTimeStore } from '@stores/firstTime';
import { useSessionStore } from '@stores/session';
import { useUserStore } from '@stores/user';

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
  const isPermissionFetching = useRef(false);
  const { hasPermission, requestPermission } = useCameraPermission();
  const navigation = useNavigation();

  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);
  const clearSession = useSessionStore((state) => state.clearSession);
  const firstTime = useFirstTimeStore((state) => state.firstTime);
  const setFirstTime = useFirstTimeStore((state) => state.setFirstTime);

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterType>('active');
  const [modalVisible, setModalVisible] = useState(false);
  const [filterMenuVisible, setFilterMenuVisible] = useState(false);
  const [tickets, setTickets] = useState<TicketType[] | null>(null);

  const goBack = () => {
    navigation.goBack();
  };

  const goToTicketScreen = (
    id: string,
    date: string,
    seat: string,
    type: string,
    movieTitle: string,
  ) => {
    navigation.navigate('Ticket', {
      ticketInfo: {
        id,
        date,
        seat,
        type,
        movieTitle,
      },
    });
  };

  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      return Alert.alert('Error', 'Unable to logout, try again');
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
    clearUser();
    clearSession();
  };

  const onFilterOptionPress = (filterOption: FilterType) => {
    setFilter(filterOption);
    setFilterMenuVisible(false);
  };

  const getUserTickets = async () => {
    const response = await cineAPI.getTickets(user.id, filter);
    setTickets(response.data);
    setLoading(false);
  };

  const handleQrCodeScanPress = () => {
    if (!hasPermission && firstTime) {
      setFirstTime(false);
      return requestPermission();
    }
    if (!hasPermission) {
      return Alert.alert(
        'Camera Permission',
        'You need to enable camera permission to scan QR code',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Open Settings',
            onPress: () => Linking.openSettings(),
          },
        ],
      );
    }
    navigation.navigate('CameraScan');
  };

  const handlerAppStateChange = async (nextAppState: AppStateStatus) => {
    if (nextAppState === 'active' && !isPermissionFetching.current) {
      isPermissionFetching.current = true;
      await requestPermission();
      isPermissionFetching.current = false;
    }
  };

  useEffect(() => {
    const subscription = AppState.addEventListener(
      'change',
      handlerAppStateChange,
    );

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    getUserTickets();
  }, [filter]);

  return (
    <TouchableWithoutFeedback
      style={{ flex: 1 }}
      onPressIn={() => setFilterMenuVisible(false)}
    >
      <Container>
        <TopBar
          title="Profile"
          leftIcon={BackSvg}
          rightIcon={LogoutSvg}
          onLeftIconPress={goBack}
          onRightIconPress={() => setModalVisible(true)}
        />
        <Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Text size={22} weight="Bold">
              Welcome, {user.name} 👋
            </Text>
            <Filter
              onOptionPress={onFilterOptionPress}
              filterMenuVisible={filterMenuVisible}
              setFilterMenuVisible={setFilterMenuVisible}
            />
          </View>

          <Divider top={20} />
          {loading ? (
            <Loading />
          ) : (
            <FlatList
              data={tickets}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={
                <EmptyList text="No tickets here.">
                  <LottieView
                    source={Sad}
                    autoPlay
                    loop
                    style={{
                      width: '100%',
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
                      item.movies!.title,
                    )
                  }
                />
              )}
              ItemSeparatorComponent={() => <Divider top={12} />}
            />
          )}
        </Content>

        {user.function === 'admin' && (
          <Footer>
            <ScanButton onPress={handleQrCodeScanPress}>
              <QrCodeSvg height={30} width={30} />
            </ScanButton>
          </Footer>
        )}
        <DetachedModal
          text="Are you sure you want to logout?"
          onConfirm={signOutUser}
          onCancel={() => setModalVisible(false)}
          visible={modalVisible}
        />
      </Container>
    </TouchableWithoutFeedback>
  );
};
