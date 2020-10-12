import "react-native-gesture-handler";

import * as React from "react";
import { View, StyleSheet, Platform } from "react-native";
import LoggedIn from "./components/loggedIn";
import Forms from "./components/Forms";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Provider } from "react-redux";
import { cstore, persistor } from "./store.js";
import { PersistGate } from "redux-persist/integration/react";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={cstore}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <View style={styles.container}>
       <Forms />
     </View> */}

        <NavigationContainer>
          <Stack.Navigator initialRouteName="Forms">
            <Stack.Screen name="Forms" component={Forms} />
            <Stack.Screen name="LoggedIn" component={LoggedIn} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
