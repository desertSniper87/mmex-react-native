import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from "../../redux/store";

export interface AccountSummaryState {
}


export const slice = createSlice({
  name: 'accountSummary',
  initialState: {} as AccountSummaryState,
  reducers: {

  },
});

export const { } = slice.actions;
export default slice.reducer;
