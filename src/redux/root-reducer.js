import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import petCollectionReducer from "./pet-collection/pet-collection.reducer";
import registerNewReducer from "./register-new/register-new.reducer";
import { searchFieldReducer } from "./search-bar/search-bar.reducer";
import profileReducer from "./profile/profile.reducer";
import newApplicationReducer from "./volunteering/volunteering.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "petCollection"],
};

const rootReducer = combineReducers({
  user: userReducer,
  petCollection: petCollectionReducer,
  registerNew: registerNewReducer,
  searchBar: searchFieldReducer,
  profile: profileReducer,
  application: newApplicationReducer,
});

export default persistReducer(persistConfig, rootReducer);
