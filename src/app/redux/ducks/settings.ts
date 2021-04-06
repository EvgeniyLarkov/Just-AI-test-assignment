import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SettingsInterface } from './types';

const initialState: SettingsInterface = {
  numberOfUsers: 1000,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ numberOfUsers: number }>) {
      const { numberOfUsers } = action.payload;
      state.numberOfUsers = numberOfUsers;
    },
    clear() {
      return initialState;
    },
  },
});

export const { set, clear } = settingsSlice.actions;

export default settingsSlice.reducer;
