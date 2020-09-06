import * as React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import NavBar from "./NavBar";
import homePageImage from "../images/homePageImage.jpeg";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  home: { height: "100%", paddingVertical: 30, marginHorizontal: 50 },
  textStyle: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold"
  },
  imageStyle: {
    width: 300,
    height: 300,
    alignSelf: "center",
    borderColor: "#526212",
    borderWidth: 10,
    resizeMode: "contain"
  }
});

export default function HomePage() {
  return (
    <View style={styles.container}>
      <NavBar style={styles.container} />
      <View style={styles.home}>
        <Image style={styles.imageStyle} source={homePageImage} />
        <Text style={styles.textStyle}>
          This is Milan's React-Native Homepage
        </Text>
      </View>
    </View>
  );
}
