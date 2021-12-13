import NewApplicationActionTypes from "./volunteering.types";

const INITIAL_STATE = {
  errorMessage: undefined,
  isApplicationSuccesful: false,
};

const newApplicationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NewApplicationActionTypes.NEW_APPLICATION_START:
      return {
        ...state,
      };

    case NewApplicationActionTypes.NEW_APPLICATION_SUCCESS:
      return {
        ...state,
        isApplicationSuccesful: true,
      };

    case NewApplicationActionTypes.NEW_APPLICATION_FAILURE:
      return {
        ...state,
        isApplicationSuccesful: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default newApplicationReducer;
