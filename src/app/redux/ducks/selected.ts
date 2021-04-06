import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUsers } from './profiles';
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
    insertBefore(state, action: PayloadAction<{ source: string, target?: string }>) {
      const { source, target } = action.payload;

      const newIds = state.allIds.map((key) => (key === source ? null : key));
      if (target === undefined) {
        newIds.splice(state.allIds.length, 0, source);
      } else {
        const newPosition = state.allIds.indexOf(target);
        newIds.splice(newPosition, 0, source);
      }

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
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, () => initialState);
  },
});

export const {
  remove, clear: clearSelected, dragStart, dragEnd, insertBefore,
} = selectedSlice.actions;

export default selectedSlice.reducer;
