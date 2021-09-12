import { createAction } from '@reduxjs/toolkit';

const changeFilter = createAction('Contact/changeFilter');
const addContact = createAction('contact/addContact');
const deleteContact = createAction('contact/deleteContact');
const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const contactsActions = {
  changeFilter,
  addContact,
  deleteContact,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
};

export default contactsActions;
