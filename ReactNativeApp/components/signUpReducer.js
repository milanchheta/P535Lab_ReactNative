import { Alert } from "react-native";
const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  number: "",
  imageuri: "",
  data: {}
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CHANGE_EMAIL":
      return {
        ...state,
        email: action.data
      };
    case "ON_CHANGE_FIRSTNAME":
      return {
        ...state,
        firstname: action.data
      };
    case "ON_UPLOAD_IMAGE":
      return {
        ...state,
        imageuri: action.data
      };
    case "ON_CHANGE_LASTNAME":
      return {
        ...state,
        lastname: action.data
      };
    case "ON_CHANGE_PASSWORD":
      return {
        ...state,
        password: action.data
      };
    case "ON_CHANGE_NUMBER":
      return {
        ...state,
        number: action.data
      };
    case "ON_SUBMIT":
      let data = state.data;
      data[action.data.email] = {
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        password: action.data.password,
        number: action.data.number,
        imageuri: action.data.imageuri
      };
      Alert.alert("Signed Up successfully!");

      return {
        ...state,
        data
      };

    default:
      return state;
  }
};

export default signUpReducer;
