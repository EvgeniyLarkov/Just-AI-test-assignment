import { combineReducers } from '@reduxjs/toolkit';
import profilesSlice from './profiles';
import selectedSlice from './selected';
import searchSlice from './search';

const rootReducer = combineReducers({
  profiles: profilesSlice,
  selected: selectedSlice,
  search: searchSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
