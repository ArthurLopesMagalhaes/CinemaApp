import { useEffect, useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from "react-native-vision-camera";

import { Loading } from "@components/Loading";

import { cineAPI } from "@services/api";

export const CameraScan = () => {
  const isMounted = useRef(false);

  const [qrCode, setQrCode] = useState("");

  const device = useCameraDevice("back");

  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes) => {
      if (codes[0].value) {
        setQrCode(codes[0].value);
      }
    },
  });

  const updateStatus = async (ticketId: string) => {
    try {
      const response = await cineAPI.updateTicketStatus(ticketId);
      if (response.error) {
        return console.log("Invalid Ticket");
      }
      console.log("Ticket Updated");
    } catch (error) {
      console.log("Error", error);
    }
  };

  if (device == null) return <Loading />;

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    updateStatus(qrCode);
  }, [qrCode]);

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
