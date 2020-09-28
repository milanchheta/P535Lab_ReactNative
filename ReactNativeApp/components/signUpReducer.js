const initialState = {
  email: "",
  firstname: "",
  lastname: "",
  password: "",
  number: ""
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ON_CHANGE_EMAIL":
      console.log(
        "State management of input change using redux -> Email:",
        action.data
      );
      return {
        ...state,
        email: action.data
      };
    case "ON_CHANGE_FIRSTNAME":
      console.log(
        "State management of input change using redux -> First Name:",
        action.data
      );
      return {
        ...state,
        firstname: action.data
      };
    case "ON_CHANGE_LASTNAME":
      console.log(
        "State management of input change using redux -> Last Name:",
        action.data
      );
      return {
        ...state,
        lastname: action.data
      };
    case "ON_CHANGE_PASSWORD":
      console.log(
        "State management of input change using redux -> Password:",
        action.data
      );
      return {
        ...state,
        password: action.data
      };
    case "ON_CHANGE_NUMBER":
      console.log(
        "State management of input change using redux -> Number:",
        action.data
      );
      return {
        ...state,
        number: action.data
      };
    case "ON_SUBMIT":
      console.log("User registered with below details:\n", state);
      return state;

    default:
      return state;
  }
};

export default signUpReducer;
