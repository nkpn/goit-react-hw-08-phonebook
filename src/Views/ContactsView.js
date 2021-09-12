import React from 'react';

import SubmitForm from 'components/SubmitForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { ToastContainer } from 'react-toastify';

export default function ContactsView() {
  return (
    <>
      <h1>Phonebook</h1>
      <SubmitForm />
      <h1>Contacts</h1>
      <Filter />
      <ContactList />
      <ToastContainer />
    </>
  );
}
