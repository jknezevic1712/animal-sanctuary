import { takeLatest, put, all, call } from "redux-saga/effects";

import RegisterNewActionTypes from "./register-new.types";

import { registerNewSuccess, registerNewFailure } from "./register-new.actions";

import { addCollectionAndDocuments } from "../../firebase/firebase.utils";

export function* RegisterNew({ payload: { registerNewData } }) {
  try {
    yield put(addCollectionAndDocuments("pets-collection", registerNewData));
    yield put(registerNewSuccess(registerNewData));
  } catch (error) {
    yield put(registerNewFailure(error));
  }
}

export function* onRegisterNewStart() {
  yield takeLatest(RegisterNewActionTypes.REGISTER_NEW_START, RegisterNew);
}

export function* registerNewSagas() {
  yield all([call(onRegisterNewStart)]);
}
