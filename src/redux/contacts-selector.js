import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getIsLoggedIn = state => state.auth.getIsLoggedIn;
export const getUsername = state => state.auth.user.name;
export const getToken = state => state.auth.token;

export const getVisibleContacts = createSelector(
  [getItems, getFilter],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
