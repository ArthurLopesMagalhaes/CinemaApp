import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';

import { Loading } from '@components/Loading';

import { cineAPI } from '@services/api';

import { ConfirmedTicketModal } from './components/ConfirmedTicketModal';
import { InvalidTicketModal } from './components/InvalidTicketModal';

export const CameraScan = () => {
  const isMounted = useRef(false);
  const [isDeniedModalVisible, setIsDeniedModalVisible] = useState(false);
  const [isConfirmedModalVisible, setIsConfirmedModalVisible] = useState(false);

  const [qrCode, setQrCode] = useState('');

  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr'],
    onCodeScanned: (codes) => {
      if (codes[0].value) {
        setQrCode(codes[0].value);
      }
    },
  });

  const updateTicketStatus = async (ticketId: string) => {
    try {
      const response = await cineAPI.updateTicketStatus(ticketId);

      if (response.data) {
        if (response.data.length > 0) {
          console.log('Ticket Updated', response.data);
          setIsConfirmedModalVisible(true);
          return;
        }
      }
      console.log('Invalid Ticket', response.error);
      setIsDeniedModalVisible(true);
      return;
    } catch (error) {
      console.log('Error', error);
    }
  };

  if (device == null) {return <Loading />;}

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    updateTicketStatus(qrCode);
  }, [qrCode]);

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
      <InvalidTicketModal
        visible={isDeniedModalVisible}
        onAnimationFinish={() => setIsDeniedModalVisible(false)}
      />
      <ConfirmedTicketModal
        visible={isConfirmedModalVisible}
        onAnimationFinish={() => setIsConfirmedModalVisible(false)}
      />
    </View>
  );
};
