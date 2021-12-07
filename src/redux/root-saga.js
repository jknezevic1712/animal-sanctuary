import { all, call } from "redux-saga/effects";

import { userSagas } from "./user/user.sagas";
import { petCollectionSagas } from "./pet-collection/pet-collection.sagas";
import { registerNewSagas } from "./register-new/register-new.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(petCollectionSagas),
    call(registerNewSagas),
  ]);
}
