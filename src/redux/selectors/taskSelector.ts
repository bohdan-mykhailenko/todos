import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const tasksSelector = (state: RootState) => state.task.tasks;
const selectedTaskSelector = (state: RootState) => state.task.selectedTask;

export const selectTasks = createSelector([tasksSelector], (tasks) => tasks);

export const selectSelectedTask = createSelector(
  [selectedTaskSelector],
  (selectedTask) => selectedTask,
);
