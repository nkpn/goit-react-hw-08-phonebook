import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
} from './contacts-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.error = false;
    },
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: state => {
      state = { ...initialState, error: true };
    },
    // [register.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    // },
    // [logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // },
    // [fetchCurrentUser](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    // },
  },
});

export default authSlice.reducer;
