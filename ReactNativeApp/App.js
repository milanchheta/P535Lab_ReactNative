import * as React from "react";
import { View, StyleSheet } from "react-native";
import Forms from "./components/Forms";

import { Provider } from "react-redux";
import { cstore, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default function App() {
  return (
    <Provider store={cstore}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={styles.container}>
          <Forms />
        </View>
      </PersistGate>
    </Provider>
  );
}
