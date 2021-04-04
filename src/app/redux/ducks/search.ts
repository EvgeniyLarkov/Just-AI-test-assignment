import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SearchInterface, SearchStates } from './types';

const initialState: SearchInterface = {
  state: SearchStates.idle,
  match: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    set(state, action: PayloadAction<{ match: string }>) {
      const { match } = action.payload;
      state.match = match;
      state.state = SearchStates.contain;
    },
    clear() {
      return initialState;
    },
  },
});

export const { set: setSearch, clear: clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
