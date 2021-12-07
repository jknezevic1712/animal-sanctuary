import { createSelector } from "reselect";

const selectRegisterNewData = (state) => state.registerNew;

export const selectCurrentRegisterData = createSelector(
  [selectRegisterNewData],
  (registerNew) => registerNew.registerData
);

export const selectIsUploadingData = createSelector(
  [selectRegisterNewData],
  (registerNew) => registerNew.isUploadingData
);
