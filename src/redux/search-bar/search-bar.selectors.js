import { createSelector } from "reselect";

const selectSearchBar = (state) => state.searchBar;

export const selectSearchField = createSelector(
  [selectSearchBar],
  (searchBar) => searchBar.searchField
);
