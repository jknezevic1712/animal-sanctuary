import RegisterNewActionTypes from "./register-new.types";

import { registerNewPet } from "../../firebase/firebase.utils";

import {
  successNotification,
  errorNotification,
} from "../../components/alertify-popup/alertify-popup.component";

export const registerNewStart = () => ({
  type: RegisterNewActionTypes.REGISTER_NEW_START,
});

export const registerNewStartAsync = (registerNewData) => {
  return (dispatch) => {
    dispatch(registerNewStart());

    registerNewPet(registerNewData)
      .then(() => {
        dispatch(registerNewSuccess(registerNewData));
        successNotification("Register successful!");
      })
      .catch((error) => {
        dispatch(registerNewFailure(error.message));
        errorNotification("Register unsuccessful!");
      });
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
