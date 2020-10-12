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
import Login from "./Login";

export default function Forms(props) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeading}>Assignment Week 7</Text>
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showSignUp}
            overFullScreen
          >
            <SignUp setshowModal={setShowSignUp} />
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={showLogin}
            overFullScreen
          >
            <Login setshowModal={setShowLogin} navigation={props.navigation} />
          </Modal>
          <TouchableOpacity
            onPress={() => {
              setShowSignUp(true);
            }}
            style={styles.button}
          >
            <Text>Sign Up </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowLogin(true);
            }}
            style={styles.button}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
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
    fontSize: 20,
    fontWeight: "bold",
    margin: 10
  },
  currentUserHeading: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 15
  },
  currentUser: {
    marginHorizontal: 20
  }
});
