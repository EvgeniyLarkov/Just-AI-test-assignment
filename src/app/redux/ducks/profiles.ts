import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDateObj } from 'app/utils/dateHelper';
import axios from 'axios';
import {
  ProfilesInterface, ProfileStates, UserInterface, UsersApiResponse,
} from './types';

export const getUsers = createAsyncThunk<
UsersApiResponse,
number | undefined,
{
  rejectValue: { message: string }
}
>(
  'profiles/getUsers',
  async (numberOfUsers = 1000, { rejectWithValue }) => {
    try {
      const URL = `https://randomuser.me/api/?results=${numberOfUsers}`;
      const users = await axios.get<UsersApiResponse>(URL);
      return users.data;
    } catch (err) {
      return rejectWithValue({
        message: 'Unable to connect',
      });
    }
  },
);

const initialState: ProfilesInterface<UserInterface> = {
  state: ProfileStates.idle,
  data: {},
  allIds: [],
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload: { results } }) => {
      for (let i = 0; i < results.length; i += 1) {
        const user = results[i];

        state.data[user.login.uuid] = {
          name: user.name.first,
          surname: user.name.last,
          regage: user.dob.age,
          regdate: getDateObj(user.dob.date),
          id: user.login.uuid,
          picture: user.picture.medium,
          email: user.email,
        };

        state.allIds.push(user.login.uuid);
      }

      state.state = ProfileStates.fetched;
    });
    builder.addCase(getUsers.pending, (state) => {
      state.allIds = [];
      state.data = {};
      state.state = ProfileStates.fetching;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.state = ProfileStates.idle;
    });
  },
});

export default profilesSlice.reducer;
