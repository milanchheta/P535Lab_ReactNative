import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView
} from "react-native";
import { useSelector } from "react-redux";

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

export default function Forms() {
  const [showModal, setshowModal] = useState(false);
  const email = useSelector(state => state.email);
  const firstname = useSelector(state => state.firstname);
  const lastname = useSelector(state => state.lastname);
  const number = useSelector(state => state.number);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.textHeading}>Assignment Week 5</Text>
        <View>
          <Text style={styles.moduleheading}> Sign Up Module </Text>

          <Text style={styles.currentUserHeading}>
            Previous Sign Up Details (Previous application state is stored in
            `AsyncStorage` using redux-persist):
          </Text>
          <Text style={styles.currentUser}>
            {"\nFirst name: " +
              firstname +
              "\nLast name: " +
              lastname +
              "\nEmail: " +
              email +
              "\nNumber: " +
              number}
          </Text>

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
          {/* <Text style={styles.moduleheading}>2. User Details form </Text> */}
          {/* <UserDetails /> */}
        </View>
      </ScrollView>
    </View>
  );
}
