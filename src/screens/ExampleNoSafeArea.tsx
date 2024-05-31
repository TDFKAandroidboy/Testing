import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Animated,
  Pressable,
  Image,
} from "react-native";
import { Tabs } from "react-native-collapsible-tab-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { mockData, mockData2, mockData3 } from "../components/Response";

const screenWidth = Dimensions.get("window").width;

const spaceBetween = 0.5;
const numColumns = 3;
const imageSize = screenWidth / numColumns - spaceBetween;

const HEADER_HEIGHT = 250;

const ADATA = Array.from({ length: 100 }, (_, index) => index + 1);
const BDATA = [0, 1];
const CDATA = Array.from({ length: 10 }, (_, index) => index + 1);

const identity = (v: any) => v + "";

const Header = () => {
  const insets = useSafeAreaInsets();
  const [safeAreaHeight, setSafeAreaHeight] = useState(0);
  useEffect(() => {
    setSafeAreaHeight(insets.top); // You can use insets.bottom as well for the bottom safe area height
  }, [insets]);

  return (
    <View style={[styles.header]}>
      <Pressable
        onPress={() => console.log("pressed")}
        style={styles.headerText}
      >
        <Text>Header</Text>
      </Pressable>
    </View>
  );
};

const ExampleNoSafeArea = () => {
  const insets = useSafeAreaInsets();
  const [safeAreaHeight, setSafeAreaHeight] = useState(0);
  useEffect(() => {
    setSafeAreaHeight(insets.top); // You can use insets.bottom as well for the bottom safe area height
  }, [insets]);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item.uri }} style={styles.image} />
  );

  return (
    <>
      <Tabs.Container
        renderHeader={Header}
        headerHeight={HEADER_HEIGHT}
        minHeaderHeight={safeAreaHeight}
      >
        <Tabs.Tab name="A">
          <Tabs.FlatList
            data={mockData3}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3} // Set numColumns to 3 for 3-column layout
          />
        </Tabs.Tab>
        <Tabs.Tab name="B">
          <Tabs.FlatList
            data={mockData2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3} // Set numColumns to 3 for 3-column layout
          />
        </Tabs.Tab>
        <Tabs.Tab name="C">
          <Tabs.FlatList
            data={mockData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3} // Set numColumns to 3 for 3-column layout
          />
        </Tabs.Tab>
      </Tabs.Container>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    width: imageSize,
    height: imageSize,
    margin: spaceBetween / 2,
  },
  header: {
    height: HEADER_HEIGHT,
    width: "100%",
    backgroundColor: "#2196f3",
  },
  headerText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ExampleNoSafeArea;
