import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Text,
  Button,
  Platform
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {
  updateemail,
  updatefirstnamne,
  updatelastname,
  updatepassword,
  updatenumber,
  updateimage,
  onsubmit
} from "./signUpActions";
import * as ImagePicker from "expo-image-picker";
// import ImageUpload from "./ImageUpload";

export default function SignUp({ setshowModal }) {
  const dispatch = useDispatch();
  const email = useSelector(state => state.signUp.email);
  const password = useSelector(state => state.signUp.password);
  const firstname = useSelector(state => state.signUp.firstname);
  const lastname = useSelector(state => state.signUp.lastname);
  const number = useSelector(state => state.signUp.number);
  const imageuri = useSelector(state => state.signUp.imageuri);
  const onSubmit = () => {
    setshowModal(false);
    dispatch(
      onsubmit({
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname,
        number: number,
        imageuri: imageuri
      })
    );
  };

  const pickImage = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.getCameraRollPermissionsAsync();
      if (status !== "granted") {
        const {
          status
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      dispatch(updateimage(result.uri));
      Alert.alert("Image uploaded successfully!");
    }
  };

  const takeImage = async () => {
    if (Platform.OS !== "web") {
      const { status } = await ImagePicker.getCameraPermissionsAsync();
      if (status !== "granted") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera permissions to make this work!");
        }
      }
    }

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    if (!result.cancelled) {
      dispatch(updateimage(result.uri));
    }
    Alert.alert("Image uploaded successfully!");
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

          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text>Upload an image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takeImage}>
            <Text>Take a photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.submitButton}
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
  submitButton: {
    alignItems: "center",
    backgroundColor: "green",
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
