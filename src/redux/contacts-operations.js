import contactsActions from './contacts-actions';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const addContact = contact => async dispatch => {
  dispatch(contactsActions.addContactRequest());

  try {
    const response = await axios.post('contacts', contact);
    dispatch(contactsActions.addContactSuccess(response.data));
  } catch (error) {
    dispatch(contactsActions.addContactError(error));
  }

  // axios
  //   .post('/contacts/', contact)
  //   .then(response => {
  //     return dispatch(contactsActions.addContactSuccess(response.data));
  //   })
  //   .catch(error => {
  //     return dispatch(contactsActions.fetchContactsError(error));
  //   });
};

export const deleteContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  console.log(id);
  try {
    await axios.delete(`contacts/${id}`);
    dispatch(contactsActions.deleteContactSuccess(id));
  } catch (error) {
    console.log(error, 'error.mesage:');
    // dispatch(contactsActions.deleteContactError(error));
  }
};

export const fetchContactsFromServer = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    // const response = await axios('/contacts');
    const response = await axios.get('/contacts');
    dispatch(contactsActions.fetchContactsSuccess(response.data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error));
  }

  // axios
  //   .get('/contacts')
  //   .then(({ data }) => {
  //     dispatch(contactsActions.fetchContactsSuccess(data));
  //   })
  //   .catch(error => dispatch(contactsActions.fetchContactsError(error)));
};
