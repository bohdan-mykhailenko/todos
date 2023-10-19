import { SortFields, SortOrder, SortValues } from '@/types/SortValues';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface sortState {
  sortValues: SortValues;
}

const initialState: sortState = {
  sortValues: {
    field: SortFields.DEFAULT,
    order: SortOrder.DEFAULT,
  },
};

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSortValues: (state, action: PayloadAction<SortValues>) => {
      state.sortValues = action.payload;
    },
  },
});

export const { setSortValues } = sortSlice.actions;

export default sortSlice.reducer;
