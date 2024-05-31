import TabViewExample from "../components/TabViewExample";
import Header from "../components/Header";
import { View, StyleSheet } from "react-native";

const Profile = () => {
  const dummyFunction = () => {};
  return (
    <View style={styles.container}>
      <Header />
      <TabViewExample />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});

export default Profile;
