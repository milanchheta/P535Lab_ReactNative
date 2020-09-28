import signUpReducer from "./components/signUpReducer";
import { AsyncStorage } from "react-native";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "persistedStoreData",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, signUpReducer);
const cstore = createStore(persistedReducer);
let persistor = persistStore(cstore);

export { cstore, persistor };
