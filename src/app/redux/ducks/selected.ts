import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedInterface, SelectedStates } from './types';

const initialState: SelectedInterface = {
  state: SelectedStates.idle,
  allIds: [],
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ ids: string[] }>) {
      const { ids } = action.payload;
      state.allIds = ids;
      state.state = SelectedStates.contain;
    },
    clear() {
      return initialState;
    },
  },
});

export const { set: setSelected, clear: clearSelected } = selectedSlice.actions;

export default selectedSlice.reducer;
