import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isAddModalOpenSelector = (state: RootState) =>
  state.modals.isAddModalOpen;

const isDeleteModalOpenSelector = (state: RootState) =>
  state.modals.isDeleteModalOpen;

const isEditModalOpenSelector = (state: RootState) =>
  state.modals.isEditModalOpen;

export const selectIsAddModalOpen = createSelector(
  [isAddModalOpenSelector],
  (isAddModalOpen) => isAddModalOpen,
);

export const selectIsDeleteModalOpen = createSelector(
  [isDeleteModalOpenSelector],
  (isDeleteModalOpen) => isDeleteModalOpen,
);

export const selectIsEditModalOpen = createSelector(
  [isEditModalOpenSelector],
  (isEditModalOpen) => isEditModalOpen,
);
