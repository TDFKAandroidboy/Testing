import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Profile from "./src/screens/Profile";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Example from "./src/screens/Example";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Profile />
      </View>
    </SafeAreaProvider>
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
