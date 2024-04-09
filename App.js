import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    //flex : 1 willl make view occupy the entire screen
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      {/* <Image source={logoImg} style={{ width: 300, height: 300 }} />
      <Image
        source={{ uri: "https://picsum.photos/300/300" }}
        style={{ width: 300, height: 300 }}
      /> */}
      <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>Image Text</Text>
      </ImageBackground>
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
