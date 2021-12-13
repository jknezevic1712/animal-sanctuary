import NewApplicationActionTypes from "./volunteering.types";

import { newVolunteerApplication } from "../../firebase/firebase.utils";

export const newApplicationStart = () => ({
  type: NewApplicationActionTypes.NEW_APPLICATION_START,
});

export const newApplicationStartAsync = (applicationData) => {
  return (dispatch) => {
    dispatch(newApplicationStart());

    newVolunteerApplication(applicationData)
      .then(() => {
        dispatch(newApplicationSuccess());
      })
      .catch((error) => dispatch(newApplicationFailure(error.message)));
  };
};

export const newApplicationSuccess = () => ({
  type: NewApplicationActionTypes.NEW_APPLICATION_SUCCESS,
});

export const newApplicationFailure = (error) => ({
  type: NewApplicationActionTypes.NEW_APPLICATION_FAILURE,
  payload: error,
});
