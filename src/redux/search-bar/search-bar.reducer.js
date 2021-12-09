import SearchBarActionTypes from "./search-bar.types";

const initialStateSearch = {
  searchField: "",
};

export const searchFieldReducer = (state = initialStateSearch, action = {}) => {
  switch (action.type) {
    case SearchBarActionTypes.CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });

    default:
      return state;
  }
};
