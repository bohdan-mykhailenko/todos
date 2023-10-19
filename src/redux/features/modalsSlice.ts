import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface modalsState {
  isAddModalOpen: boolean;
  isFormModalOpen: boolean;
}

const initialState: modalsState = {
  isAddModalOpen: false,
  isFormModalOpen: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsAddModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAddModalOpen = action.payload;
    },

    setIsFormModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isFormModalOpen = action.payload;
    },
  },
});

export const { setIsAddModalOpen, setIsFormModalOpen } = modalsSlice.actions;

export default modalsSlice.reducer;
