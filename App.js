import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    //flex : 1 willl make view occupy the entire screen
    //onRequestClose : called when user press back button on the device
    //presentationStyle only affects on the iOS and not on the Android
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        <Button
          title="Press"
          onPress={() => setIsModalVisible(true)}
          color="midnightblue"
        />
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType="slide"
          presentationStyle="formSheet"
        >
          <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
            <Text>Modal content</Text>
            <Button title="Close" onPress={() => setIsModalVisible(false)} />
          </View>
        </Modal>
      </ScrollView>
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
