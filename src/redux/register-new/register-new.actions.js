import RegisterNewActionTypes from "./register-new.types";

import { registerNewPet } from "../../firebase/firebase.utils";

// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

// const config = {
//   apiKey: "AIzaSyAjQplpsqlztBuWqHC955nbABb0yXsJjSk",
//   authDomain: "animal-sanctuary-9aad6.firebaseapp.com",
//   projectId: "animal-sanctuary-9aad6",
//   storageBucket: "animal-sanctuary-9aad6.appspot.com",
//   messagingSenderId: "110123588509",
//   appId: "1:110123588509:web:e1a420f7cb8273c7c32d74",
//   measurementId: "G-5Q5WS11YCF",
// };

// firebase.initializeApp(config);

// const firestore = firebase.firestore();

export const registerNewStart = () => ({
  type: RegisterNewActionTypes.REGISTER_NEW_START,
});

export const registerNewStartAsync = (collectionKey, registerNewData) => {
  return (dispatch) => {
    // const collectionRef = firestore.collection(collectionKey);

    dispatch(registerNewStart());

    registerNewPet(registerNewData)
      .then(() => {
        dispatch(registerNewSuccess(registerNewData));
      })
      .catch((error) => dispatch(registerNewFailure(error.message)));

    // collectionRef
    //   .get()
    //   .then(() => {
    //     registerNewPet(registerNewData);
    //     dispatch(registerNewSuccess(registerNewData));
    //   })
    //   .catch((error) => dispatch(registerNewFailure(error.message)));
  };
};

export const registerNewSuccess = (registerNewData) => ({
  type: RegisterNewActionTypes.REGISTER_NEW_SUCCESS,
  payload: { registerNewData },
});

export const registerNewFailure = (error) => ({
  type: RegisterNewActionTypes.REGISTER_NEW_FAILURE,
  payload: error,
});
