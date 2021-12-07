import PetCollectionActionTypes from "./pet-collection.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: PetCollectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: PetCollectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: PetCollectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("pets-collection");

    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};
