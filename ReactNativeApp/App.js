import * as React from "react";
import { View, StyleSheet } from "react-native";
import Forms from "./components/Forms";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Forms />
    </View>
  );
}
