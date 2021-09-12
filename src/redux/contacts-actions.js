import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('Contact/changeFilter');

const fetchContactRequest = createAction('Contacts/fetchContactRequest');
const fetchContactSuccess = createAction('Contacts/fetchContactSuccess');
const fetchContactError = createAction('Contacts/fetchContactError');

const addContactRequest = createAction('Contacts/addContactsRequest');
const addContactSuccess = createAction('Contacts/addContactsSuccess');
const addContactError = createAction('Contacts/addContactsError');

const deleteContactRequest = createAction('Contacts/deleteContactRequest');
const deleteContactSuccess = createAction('Contacts/deleteContactSuccess');
const deleteContactError = createAction('Contacts/deleteContactError');

const contactsActions = {
  changeFilter,
  fetchContactError,
  fetchContactRequest,
  fetchContactSuccess,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

export default contactsActions;
