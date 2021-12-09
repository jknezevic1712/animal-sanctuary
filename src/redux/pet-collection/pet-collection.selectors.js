import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectPetCollection = (state) => state.petCollection;

export const selectCollection = createSelector(
  [selectPetCollection],
  (petCollection) => petCollection.collections
);

export const selectCollectionsForView = memoize(
  createSelector([selectCollection], (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
  )
);

export const selectCollectionDetails = memoize((urlID) =>
  createSelector([selectCollection], (collection) =>
    collection ? collection[urlID] : null
  )
);
