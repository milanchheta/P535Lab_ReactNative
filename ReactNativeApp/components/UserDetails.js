import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Picker,
  Alert
} from "react-native";
import DatePicker from "react-native-datepicker";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  textHeading: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  gender: {
    margin: 10,
    borderColor: "black",
    borderWidth: 2
  },
  textArea: {
    height: 100,
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 5
  },
  textInput: {
    margin: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: 5
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin: 10
  },
  date: {
    width: 300,
    alignSelf: "center"
  }
});

export default function UserDetails() {
  const [bio, setBio] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [gender, setGender] = React.useState("Select your gender...");
  const [date, setDate] = React.useState("");

  const onSubmit = () => {
    console.log(
      "\nGender: " + gender + "\nDate of birth: " + date + "\nBio: " + bio
    );
    setBio("");
    setCountry("");
    setGender("");
    setDate("");
    Alert.alert("Check console for collected input data");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>User Details form</Text>

      <View style={styles.gender}>
        <Picker selectedValue={gender} onValueChange={setGender}>
          <Picker.Item label="Select your gender..." value="na" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
          <Picker.Item label="Prefer not to say" value="Prefer not to say" />
        </Picker>
      </View>

      <DatePicker
        date={date}
        mode="date"
        placeholder="Select your date of birth"
        format="MM-DD-YYYY"
        minDate="01-01-1980"
        maxDate="01-01-2020"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        style={styles.date}
        onDateChange={date => {
          setDate(date);
        }}
      />
      <View style={styles.textInput}>
        <TextInput
          onChangeText={text => setCountry(text)}
          value={country}
          placeholder="Enter your Nationality"
        />
      </View>
      <View style={styles.textArea}>
        <TextInput
          multiline={true}
          onChangeText={text => setBio(text)}
          value={bio}
          placeholder="Enter Bio here..."
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          onSubmit();
        }}
        style={styles.button}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}
