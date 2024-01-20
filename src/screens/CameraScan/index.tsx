import { StyleSheet, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";

import { Loading } from "@components/Loading";

import { cineAPI } from "@services/api";

export const CameraScan = () => {
  const device = useCameraDevice("back");

  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      console.log(`Code: ${codes[0].value}`);
      if (codes[0].value) {
        updateStatus(codes[0].value);
      }
    },
  });

  const updateStatus = async (ticketId: string) => {
    try {
      const response = await cineAPI.updateTicketStatus(ticketId);
      console.log(">", response);
    } catch (error) {
      console.log(error);
    }
  };

  if (device == null) return <Loading />;

  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
    </View>
  );
};
