import signUpReducer from "./components/signUpReducer";
import loginReducer from "./components/LoginReducer";

import { AsyncStorage } from "react-native";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer
});

const persistConfig = {
  key: "root4",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const cstore = createStore(persistedReducer);
let persistor = persistStore(cstore);

export { cstore, persistor };
