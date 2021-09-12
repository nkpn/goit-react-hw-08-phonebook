import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsActions from './contacts-actions';
import actions from './contacts-actions';

//* CreateReducer
const items = createReducer([], {
  [contactsActions.fetchContactSuccess]: (_, action) => action.payload,

  [contactsActions.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],

  [contactsActions.deleteContactSuccess]: (state, action) =>
    state.filter(state => state.id !== action.payload),
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactRequest]: () => true,
  [contactsActions.fetchContactSuccess]: () => false,
  [contactsActions.fetchContactError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactError]: (_, action) => action.payload,
  [contactsActions.fetchContactRequest]: (_, action) => null,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
