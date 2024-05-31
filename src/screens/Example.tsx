import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  Pressable,
} from "react-native";
import { Tabs, useHeaderMeasurements } from "react-native-collapsible-tab-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const screenWidth = Dimensions.get("window").width;

const HEADER_HEIGHT = 250;
const FADE_HEIGHT = 100;

const ADATA = Array.from({ length: 100 }, (_, index) => index + 1);
const BDATA = [0, 1];
const CDATA = Array.from({ length: 10 }, (_, index) => index + 1);

const identity = (v: any) => v + "";

const Header = () => {
  return (
    <View style={styles.header}>
      <Pressable onPress={() => console.log("pressed")}>
        <Text>Header</Text>
      </Pressable>
    </View>
  );
};

const Example = () => {
  const insets = useSafeAreaInsets();
  const [safeAreaHeight, setSafeAreaHeight] = useState(0);
  useEffect(() => {
    setSafeAreaHeight(insets.top); // You can use insets.bottom as well for the bottom safe area height
  }, [insets]);

  const renderItem = (item: any) => {
    return (
      <View style={[styles.box, item % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  };

  return (
    <Tabs.Container
      renderHeader={Header}
      headerHeight={HEADER_HEIGHT}
      minHeaderHeight={safeAreaHeight}
    >
      <Tabs.Tab name="A">
        <Tabs.FlatList
          data={ADATA}
          renderItem={renderItem}
          keyExtractor={identity}
          numColumns={3} // Set numColumns to 3 for 3-column layout
        />
      </Tabs.Tab>
      <Tabs.Tab name="B">
        <Tabs.FlatList
          data={BDATA}
          renderItem={renderItem}
          keyExtractor={identity}
          numColumns={3} // Set numColumns to 3 for 3-column layout
        />
      </Tabs.Tab>
      <Tabs.Tab name="C">
        <Tabs.FlatList
          data={CDATA}
          renderItem={renderItem}
          keyExtractor={identity}
          numColumns={3} // Set numColumns to 3 for 3-column layout
        />
      </Tabs.Tab>
    </Tabs.Container>
  );
};

const styles = StyleSheet.create({
  box: {
    height: screenWidth / 3,
    width: screenWidth / 3, // Divide width into 3 columns
    borderWidth: 0.5,
    borderColor: "green",
  },
  boxA: {
    backgroundColor: "white",
  },
  boxB: {
    backgroundColor: "#D8D8D8",
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
});

export default Example;
