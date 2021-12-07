import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import petCollectionReducer from "./pet-collection/pet-collection.reducer";
import registerNewReducer from "./register-new/register-new.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: userReducer,
  petCollection: petCollectionReducer,
  registerNew: registerNewReducer,
});

export default persistReducer(persistConfig, rootReducer);
