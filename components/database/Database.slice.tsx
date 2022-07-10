import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../redux/store";
import { SQLiteDatabase } from "react-native-sqlite-storage";

export interface DatabaseState {
  db: SQLiteDatabase
}


export const slice = createSlice({
  name: 'database',
  initialState: {} as DatabaseState,
  reducers: {
    setDb: (state, action: PayloadAction<SQLiteDatabase>) => {
      state.db = action.payload
    }
  },
});

export const { setDb } = slice.actions;
export const selectDb = (state: RootState) => state.database.db;

export default slice.reducer;
