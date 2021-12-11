import ProfileActionTypes from "./profile.types";

const INITIAL_STATE = {
  profileData: null,
  error: null,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProfileActionTypes.PROFILE_UPDATE_SUCCESS:
      return {
        ...state,
        profileData: action.payload,
        error: null,
      };

    case ProfileActionTypes.PROFILE_UPDATE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default profileReducer;
