import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text
} from "react-native";

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

export default function SignUp({ setshowModal }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [number, setNumber] = React.useState("");

  const onSubmit = () => {
    console.log(
      "\nEmail: " +
        email +
        "\nPassword: " +
        password +
        "\nFirst Name: " +
        firstname +
        "\nLast Name: " +
        lastname +
        "\nPhone Number: " +
        number
    );
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastname("");
    setNumber("");
    Alert.alert("Check console for collected input data");
    setshowModal(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalStyle}>
          <Text style={styles.textHeading}>Sign Up form</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setEmail(text)}
            value={email}
            placeholder="Email..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => setPassword(text)}
            value={password}
            placeholder="Password..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => setFirstname(text)}
            value={firstname}
            placeholder="First Name..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => setLastname(text)}
            value={lastname}
            placeholder="Last Name..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={no => setNumber(no)}
            value={number}
            placeholder="Phone Number..."
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
              setshowModal(false);
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
