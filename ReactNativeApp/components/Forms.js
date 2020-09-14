import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import SignUp from "./SignUp";
import UserDetails from "./UserDetails";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20
  },
  textHeading: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  },
  moduleheading: {
    fontSize: 15,
    fontWeight: "bold",
    margin: 10
  }
});

export default function Forms() {
  const [showModal, setshowModal] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeading}>Assignment Week 3</Text>
        <View>
          <Text style={styles.moduleheading}>1. Sign Up Module </Text>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModal}
            overFullScreen
          >
            <SignUp setshowModal={setshowModal} />
          </Modal>
          <TouchableOpacity
            onPress={() => {
              setshowModal(true);
            }}
            style={styles.button}
          >
            <Text>Sign Up </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.moduleheading}>2. User Details form </Text>
          <UserDetails />
        </View>
      </ScrollView>
    </View>
  );
}
