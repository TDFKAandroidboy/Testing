import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header = () => {
  const dummyFunction = () => {};
  const insets = useSafeAreaInsets();
  const [safeAreaHeight, setSafeAreaHeight] = useState(0);
  useEffect(() => {
    setSafeAreaHeight(insets.top); // You can use insets.bottom as well for the bottom safe area height
  }, [insets]);

  return (
    <View style={styles.container}>
      <View style={[styles.banner, { paddingTop: safeAreaHeight }]}>
        <View style={styles.bannerItem}>
          <Text style={styles.headerText}>Header</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.headerText}>Bio</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
  banner: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerItem: {
    flex: 1,
    backgroundColor: "blue",
  },
  bio: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
