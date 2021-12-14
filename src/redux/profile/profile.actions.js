import ProfileActionTypes from "./profile.types";

import { updateProfileData } from "../../firebase/firebase.utils";

import {
  successNotification,
  errorNotification,
} from "../../components/alertify-popup/alertify-popup.component";

export const profileUpdateStart = () => ({
  type: ProfileActionTypes.PROFILE_UPDATE_START,
});

export const profileUpdateStartAsync = (userId, profileData) => {
  return (dispatch) => {
    dispatch(profileUpdateStart());

    updateProfileData(userId, profileData)
      .then(() => {
        dispatch(profileUpdateSuccess(userId, profileData));
        successNotification("Profile updated!");
      })
      .catch((error) => {
        dispatch(profileUpdateFailure(error.message));
        errorNotification("Profile not updated!");
      });
  };
};

export const profileUpdateSuccess = (userId, profileData) => ({
  type: ProfileActionTypes.PROFILE_UPDATE_SUCCESS,
  payload: { userId, profileData },
});

export const profileUpdateFailure = (error) => ({
  type: ProfileActionTypes.PROFILE_UPDATE_FAILURE,
  payload: error,
});
