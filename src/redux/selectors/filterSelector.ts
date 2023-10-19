import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const filterValuesSelector = (state: RootState) => state.filter.filterValues;

export const selectFilterValues = createSelector(
  [filterValuesSelector],
  (filterValues) => filterValues,
);
