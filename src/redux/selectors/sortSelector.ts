import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const sortValuesSelector = (state: RootState) => state.sort.sortValues;

export const selectSortValues = createSelector(
  [sortValuesSelector],
  (sortValues) => sortValues,
);
