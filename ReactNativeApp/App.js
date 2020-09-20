import * as React from "react";
import { View, StyleSheet } from "react-native";
import Forms from "./components/Forms";

import signUpReducer from "./components/signUpReducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const configureStore = createStore(signUpReducer);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default function App() {
  return (
    <Provider store={configureStore}>
      <View style={styles.container}>
        <Forms />
      </View>
    </Provider>
  );
}
