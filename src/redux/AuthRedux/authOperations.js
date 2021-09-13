import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async dataUser => {
  const { data } = await axios.post('/users/signup', dataUser);
  token.set(data.token);
  console.log(axios.defaults.headers.common.Authorization);
  return data;
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error.message);
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkApi) => {
    const persistedToken = thunkApi.getState().auth.token;

    console.log(thunkApi.getState());
    // if (persistedToken === null) {
    //   console.log('Токена нет, уходим из fetchCurrentUser');
    //   return thunkApi.rejectWithValue();
    // }

    token.set(persistedToken);
    const { data } = await axios('/users/current');
    return data;
  },
);
