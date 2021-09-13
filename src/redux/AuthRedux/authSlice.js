import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, fetchCurrentUser } from './authOperations';

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
    [logIn.pending]: state => {
      state.error = false;
    },
    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: state => {
      state = { ...initialState, error: true };
    },
    [logOut.pending]: state => {
      state.error = false;
    },
    [logOut.fulfilled]: state => {
      state.token = null;
      state.isLoggedIn = false;
      state.user = { name: null, email: null };
    },
    [logOut.rejected]: state => {
      state.error = true;
    },
    [fetchCurrentUser.pending]: state => {
      state.error = false;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.rejected]: state => {
      state.error = true;
    },
  },
});

export default authSlice.reducer;
