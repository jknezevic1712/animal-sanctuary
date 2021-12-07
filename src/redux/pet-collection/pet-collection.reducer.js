import PetCollectionActionTypes from "./pet-collection.types";

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const petCollectionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PetCollectionActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case PetCollectionActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
        errorMessage: undefined,
      };

    case PetCollectionActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default petCollectionReducer;
