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

export const addContact = contact => async dispatch => {
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

export const deleteContact = id => async dispatch => {
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
    // TODO: Добавить обработку ошибки error.message
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    // TODO: Добавить обработку ошибки error.message
    console.log(error.message);
  }
});

export const fetchContactsFromServer = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

export const fetchPostContactToServer = contactData => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const { data } = await axios.post('/contacts', contactData);
    dispatch(contactsActions.addContact(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

export const fetchDeleteContactFromServer = id => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const data = await axios.delete(`contacts/${id}`);
    dispatch(contactsActions.deleteContact(id));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }
};

// export const fetchCurrentUser = createAsyncThunk(
//   'auth/refresh',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;

//     if (persistedToken === null) {
//       console.log('Токена нет, уходим из fetchCurrentUser');
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     try {
//       const { data } = await axios.get('/users/current');
//       return data;
//     } catch (error) {
//       // TODO: Добавить обработку ошибки error.message
//       console.log(error.message);
//     }
//   },
// );
