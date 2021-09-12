import contactsActions from './contacts-actions';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const fetchContact = () => async dispatch => {
  dispatch(contactsActions.fetchContactRequest());

  axios
    .get('/contacts')
    .then(response => {
      return dispatch(contactsActions.fetchContactSuccess(response.data));
    })
    .catch(error => {
      return dispatch(contactsActions.fetchContactError(error));
    });
};

const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post('/contacts/', contact)
    .then(response => {
      return dispatch(contactsActions.addContactSuccess(response.data));
    })
    .catch(error => {
      return dispatch(contactsActions.addContactError(error));
    });
};

const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  axios.delete(`/contacts/${id}`).then(() => {
    return dispatch(contactsActions.deleteContactSuccess(id));
  });
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * После успешной регистрации добавляем токен в HTTP-заголовок
 */
const register = createAsyncThunk(
  'contactsOperations/register',
  async credentials => {
    // try {
    //   const { data } = await axios.post('/users/signup', credentials);
    //   token.set(data.token);
    //   console.log(axios.defaults.headers.common.Authorization);
    //   return data;
    // } catch (error) {
    //   //* Сделать обработку ошибки
    //   console.log(error.message);
    // }
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    //! попробуй token.set(token);
    console.log(axios.defaults.headers.common.Authorization);
    return data;
  },
);

/*
 * POST @ /users/login
 * body: { email, password }
 * После успешного логина добавляем токен в HTTP-заголовок
 */
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    console.log(data.token);
    return data;
  } catch (error) {
    console.log(error.message);
    // TODO: Добавить обработку ошибки error.message
  }
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * После успешного логаута, удаляем токен из HTTP-заголовка
 */
const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
    console.log(error.message);
  }
});

/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
      console.log(error.message);
    }
  },
);

const contactsOperations = {
  fetchContact,
  addContact,
  deleteContact,
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default contactsOperations;
