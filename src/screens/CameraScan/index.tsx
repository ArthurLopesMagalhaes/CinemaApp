import { StyleSheet, View } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";
import { Loading } from "../../components/Loading";

export const CameraScan = () => {
  const device = useCameraDevice("back");
  if (device == null) return <Loading />;
  return (
    <View style={{ flex: 1, backgroundColor: "red" }}>
      <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
    </View>
  );
};
