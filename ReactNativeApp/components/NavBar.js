import * as React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  navbar: {
    height: 65,
    backgroundColor: "#ff4b5c",
    paddingHorizontal: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  navItemBox: {
    paddingHorizontal: 10,
    alignItems: "center"
  },
  navItem: { color: "#393b44" }
});

export default function NavBar() {
  return (
    <View style={styles.navbar}>
      <View style={styles.navItemBox}>
        <Icon style={styles.navItem} name="home" size={35} />
      </View>
      <View style={styles.navItemBox}>
        <Icon style={styles.navItem} name="search" size={35} />
      </View>
    </View>
  );
}
