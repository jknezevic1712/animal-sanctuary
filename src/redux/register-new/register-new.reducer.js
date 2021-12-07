import RegisterNewActionTypes from "./register-new.types";

const INITIAL_STATE = {
  errorMessage: undefined,
  registerData: null,
};

const registerNewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RegisterNewActionTypes.REGISTER_NEW_SUCCESS:
      return {
        ...state,
        registerData: action.payload,
        errorMessage: undefined,
      };

    case RegisterNewActionTypes.REGISTER_NEW_FAILURE:
      return {
        ...state,
        registerData: null,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default registerNewReducer;
