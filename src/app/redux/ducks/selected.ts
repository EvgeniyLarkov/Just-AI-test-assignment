import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SelectedInterface, SelectedStates } from './types';

const initialState: SelectedInterface = {
  state: SelectedStates.idle,
  isDragging: false,
  allIds: [],
};

const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    add(state, action: PayloadAction<{ id: string, position: number }>) {
      const { id, position } = action.payload;
      state.allIds.splice(position, 0, id);
      state.state = SelectedStates.contain;
    },
    remove(state, action: PayloadAction<{ id: string, position: number }>) {
      const { position } = action.payload;
      state.allIds.splice(position, 1);
      state.state = SelectedStates.contain;
    },
    dragStart(state) {
      state.isDragging = true;
    },
    dragEnd(state) {
      state.isDragging = false;
    },
    clear() {
      return initialState;
    },
  },
});

export const {
  add, remove, clear: clearSelected, dragStart, dragEnd,
} = selectedSlice.actions;

export default selectedSlice.reducer;
