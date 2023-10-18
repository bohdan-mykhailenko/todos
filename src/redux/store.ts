'use client';

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';
//import modalsReducer from './features/modals/modalsSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    //modals: modalsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
