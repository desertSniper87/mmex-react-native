import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import databaseSlice from "../components/database/Database.slice"

export const store = configureStore({
  reducer: {
    database: databaseSlice
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
  RootState,
  unknown,
  Action<string>>;
