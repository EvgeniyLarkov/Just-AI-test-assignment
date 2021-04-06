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
    move(state, action: PayloadAction<{ id: string, position: number }>) {
      const { id, position } = action.payload;
      const newIds = state.allIds.map((key) => (key === id ? null : key));
      newIds.splice(position, 0, id);

      state.allIds = newIds.filter((key) => key !== null) as string[];
    },
    remove(state, action: PayloadAction<{ id: string }>) {
      const { id } = action.payload;
      const newIds = state.allIds.filter((key) => key !== id);

      state.allIds = newIds;
      if (state.allIds.length === 0) {
        state.state = SelectedStates.idle;
      }
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
  add, remove, move, clear: clearSelected, dragStart, dragEnd,
} = selectedSlice.actions;

export default selectedSlice.reducer;
