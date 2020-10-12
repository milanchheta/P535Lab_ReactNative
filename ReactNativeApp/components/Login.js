import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  updateLoginEmail,
  updateLoginPassword,
  onLoginSubmit
} from "./LoginAction";
import * as Notifications from "expo-notifications";

export default function Login(props) {
  const dispatch = useDispatch();
  const loginEmail = useSelector(state => state.login.loginEmail);
  const loginPassword = useSelector(state => state.login.loginPassword);
  const loginData = useSelector(state => state.signUp.data);

  const onSubmit = () => {
    props.setshowModal(false);
    console.log(loginEmail, loginData);

    if (loginData.hasOwnProperty(String(loginEmail))) {
      console.log(loginPassword, loginData[String(loginEmail)]["password"]);
      if (loginPassword == loginData[String(loginEmail)]["password"]) {
        props.navigation.navigate("LoggedIn");
        if (Platform.OS !== "web") {
          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: false,
              shouldSetBadge: false
            })
          });

          Notifications.scheduleNotificationAsync({
            content: {
              title: "NOTIFICATION",
              body: "User Login detected"
            },
            trigger: null
          });
        }
      } else {
        Alert.alert("Incorrect Email/Password entered");
      }
    } else {
      Alert.alert("User not found, please sign up");
    }
  };
  {
    console.log(props);
  }
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalStyle}>
          <Text style={styles.textHeading}>Login form</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => dispatch(updateLoginEmail(text))}
            value={loginEmail}
            placeholder="Email..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => dispatch(updateLoginPassword(text))}
            value={loginPassword}
            placeholder="Password..."
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onSubmit();
            }}
          >
            <Text>Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              props.setshowModal(false);
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 5
  },
  textHeading: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  },
  closeButton: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    margin: 10
  },
  modalStyle: {
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "#000",
    minWidth: 300,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.35,
    shadowRadius: 2.84,
    elevation: 4,
    padding: 20
  }
});
