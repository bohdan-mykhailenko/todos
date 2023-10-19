import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isAddModalOpenSelector = (state: RootState) =>
  state.modals.isAddModalOpen;
const isFormModalOpenSelector = (state: RootState) =>
  state.modals.isFormModalOpen;

export const selectIsAddModalOpen = createSelector(
  [isAddModalOpenSelector],
  (isAddModalOpen) => isAddModalOpen,
);

export const selectIsFormModalOpen = createSelector(
  [isFormModalOpenSelector],
  (isFormModalOpen) => isFormModalOpen,
);
