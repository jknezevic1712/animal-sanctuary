import SearchBarActionTypes from "./search-bar.types";

export const setSearchField = (text) => ({
  type: SearchBarActionTypes.CHANGE_SEARCH_FIELD,
  payload: text,
});
