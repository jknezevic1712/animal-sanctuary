import RegisterNewActionTypes from "./register-new.types";

export const registerNewStart = (registerNewData) => ({
  type: RegisterNewActionTypes.REGISTER_NEW_START,
  payload: registerNewData,
});

export const registerNewSuccess = ({ registerNewData, additionalData }) => ({
  type: RegisterNewActionTypes.REGISTER_NEW_SUCCESS,
  payload: { registerNewData, additionalData },
});

export const registerNewFailure = (error) => ({
  type: RegisterNewActionTypes.REGISTER_NEW_FAILURE,
  payload: error,
});
