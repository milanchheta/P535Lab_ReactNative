import * as React from "react";
import { View, StyleSheet } from "react-native";
import HomePage from "./components/HomePage";

const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
});

export default function App() {
  return (
    <View style={styles.container} className="apps">
      <HomePage />
    </View>
  );
}
