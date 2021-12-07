import { takeLatest, put, all, call } from "redux-saga/effects";

import PetCollectionActionTypes from "./pet-collection.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./pet-collection.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("pets-collection");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    PetCollectionActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* petCollectionSagas() {
  yield all([call(fetchCollectionsStart)]);
}
