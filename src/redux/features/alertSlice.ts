import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Alert } from '../../types/Alert';

interface alertState {
  isAlertOpenned: boolean;
  alertMessage: Alert;
}

const initialState: alertState = {
  isAlertOpenned: false,
  alertMessage: {
    title: '',
    text: '',
    severity: '',
  },
};

const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    setIsAlertOppened: (state, action: PayloadAction<boolean>) => {
      state.isAlertOpenned = action.payload;
    },

    setAlertMessage: (state, action: PayloadAction<Alert>) => {
      state.alertMessage = action.payload;
    },
  },
});

export const { setIsAlertOppened, setAlertMessage } = alertSlice.actions;

export default alertSlice.reducer;
