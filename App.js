import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert, Button } from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    //flex : 1 willl make view occupy the entire screen
    //onRequestClose : called when user press back button on the device
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <Button title="Alert" onPress={() => Alert.alert("Invalid data")} />
      <Button
        title="Alert 2"
        onPress={() => Alert.alert("Invalid data", "DOB Incorrect")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
