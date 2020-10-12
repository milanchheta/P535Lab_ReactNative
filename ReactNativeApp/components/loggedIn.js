import * as React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { useSelector } from "react-redux";

export default function LoggedIn() {
  const image = useSelector(state => state.signUp.imageuri);
  const firstname = useSelector(state => state.signUp.firstname);
  const lastname = useSelector(state => state.signUp.lastname);
  const number = useSelector(state => state.signUp.number);
  return (
    <View style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
      <Text style={styles.textheader}>Check your profile picture</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  imageStyle: {
    width: 200,
    height: 200,
    alignSelf: "center"
  },
  textheader: {
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 20
  }
});
