import RegisterNewActionTypes from "./register-new.types";

const INITIAL_STATE = {
  registerData: null,
  errorMessage: undefined,
  isUploadingData: false,
};

const registerNewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterNewActionTypes.REGISTER_NEW_START:
      return {
        ...state,
        isUploadingData: true,
      };

    case RegisterNewActionTypes.REGISTER_NEW_SUCCESS:
      return {
        ...state,
        isUploadingData: false,
        registerData: action.payload,
        errorMessage: undefined,
      };

    case RegisterNewActionTypes.REGISTER_NEW_FAILURE:
      return {
        ...state,
        isUploadingData: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default registerNewReducer;
