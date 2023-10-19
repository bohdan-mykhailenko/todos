import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isAlertOpennedSelector = (state: RootState) => state.alert.isAlertOpenned;
const alertMessageSelector = (state: RootState) => state.alert.alertMessage;

export const selectIsAlertOpenned = createSelector(
  [isAlertOpennedSelector],
  (isAlertOpenned) => isAlertOpenned,
);

export const selectAlertMessage = createSelector(
  [alertMessageSelector],
  (alertMessage) => alertMessage,
);
