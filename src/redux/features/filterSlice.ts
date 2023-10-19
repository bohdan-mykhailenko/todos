import { FilterValues } from '@/types/FilterValues';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface filterState {
  filterValues: FilterValues;
}

const initialState: filterState = {
  filterValues: {
    query: '',
    status: 'all',
    priority: 'all',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValues: (state, action: PayloadAction<FilterValues>) => {
      state.filterValues = action.payload;
    },
  },
});

export const { setFilterValues } = filterSlice.actions;

export default filterSlice.reducer;
