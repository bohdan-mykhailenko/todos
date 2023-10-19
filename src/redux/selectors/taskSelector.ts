import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const tasksSelector = (state: RootState) => state.task.tasks;
const updatingTaskSelector = (state: RootState) => state.task.updatingTask;
const filterValuesSelector = (state: RootState) => state.task.filterValues;

export const selectTasks = createSelector([tasksSelector], (tasks) => tasks);

export const selectUpdatingTask = createSelector(
  [updatingTaskSelector],
  (updatingTask) => updatingTask,
);

export const selectFilterValues = createSelector(
  [filterValuesSelector],
  (filterValues) => filterValues,
);
