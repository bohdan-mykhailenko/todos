import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const isAddFormOpennedSelector = (state: RootState) =>
  state.task.isAddFormOpenned;
const tasksSelector = (state: RootState) => state.task.tasks;

export const selectIsAddFormOpenned = createSelector(
  [isAddFormOpennedSelector],
  (isAddFormOpenned) => isAddFormOpenned,
);

export const selectTasks = createSelector([tasksSelector], (tasks) => tasks);
