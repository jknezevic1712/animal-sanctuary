import NewApplicationActionTypes from "./volunteering.types";

import { newVolunteerApplication } from "../../firebase/firebase.utils";

import {
  successNotification,
  errorNotification,
} from "../../components/alertify-popup/alertify-popup.component";

export const newApplicationStart = () => ({
  type: NewApplicationActionTypes.NEW_APPLICATION_START,
});

export const newApplicationStartAsync = (applicationData) => {
  return (dispatch) => {
    dispatch(newApplicationStart());

    newVolunteerApplication(applicationData)
      .then(() => {
        dispatch(newApplicationSuccess());
        successNotification("Successfully Applied!");
      })
      .catch((error) => {
        dispatch(newApplicationFailure(error.message));
        errorNotification("Error with your application!");
      });
  };
};

export const newApplicationSuccess = () => ({
  type: NewApplicationActionTypes.NEW_APPLICATION_SUCCESS,
});

export const newApplicationFailure = (error) => ({
  type: NewApplicationActionTypes.NEW_APPLICATION_FAILURE,
  payload: error,
});
