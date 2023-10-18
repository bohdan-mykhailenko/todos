import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface modalsState {
  isAddModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isEditModalOpen: boolean;
}

const initialState: modalsState = {
  isAddModalOpen: false,
  isDeleteModalOpen: false,
  isEditModalOpen: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setIsAddModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isAddModalOpen = action.payload;
    },

    setIsDeleteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isDeleteModalOpen = action.payload;
    },
    setIsEditModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isEditModalOpen = action.payload;
    },
  },
});

export const { setIsAddModalOpen, setIsDeleteModalOpen, setIsEditModalOpen } =
  modalsSlice.actions;

export default modalsSlice.reducer;
