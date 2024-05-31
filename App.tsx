import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Example from "./src/screens/Example";
import ExampleNoSafeArea from "./src/screens/ExampleNoSafeArea";

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <ExampleNoSafeArea />
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
