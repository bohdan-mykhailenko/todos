'use client';

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './features/taskSlice';
import modalsReducer from './features/modalsSlice';
import filterReducer from './features/filterSlice';
import sortReducer from './features/sortSlice';

const store = configureStore({
  reducer: {
    task: taskReducer,
    filter: filterReducer,
    sort: sortReducer,
    modals: modalsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
