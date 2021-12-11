import { createSelector } from "reselect";

const selectProfile = (state) => state.profile;

export const selectProfileData = createSelector(
  [selectProfile],
  (profile) => profile.profileData
);
