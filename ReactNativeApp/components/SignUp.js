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
  updateemail,
  updatefirstnamne,
  updatelastname,
  updatepassword,
  updatenumber,
  onsubmit
} from "./signUpActions";
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
  const dispatch = useDispatch();
  const email = useSelector(state => state.email);
  const password = useSelector(state => state.password);
  const firstname = useSelector(state => state.firstname);
  const lastname = useSelector(state => state.lastname);
  const number = useSelector(state => state.number);

  const onSubmit = () => {
    Alert.alert("Check console for output");
    setshowModal(false);
    dispatch(onsubmit());
  };
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalStyle}>
          <Text style={styles.textHeading}>Sign Up form</Text>
          <TextInput
            style={styles.textInput}
            onChangeText={text => dispatch(updateemail(text))}
            value={email}
            placeholder="Email..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => dispatch(updatepassword(text))}
            value={password}
            placeholder="Password..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => dispatch(updatefirstnamne(text))}
            value={firstname}
            placeholder="First Name..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={text => dispatch(updatelastname(text))}
            value={lastname}
            placeholder="Last Name..."
          />
          <TextInput
            style={styles.textInput}
            onChangeText={no => dispatch(updatenumber(no))}
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
