import React, { useEffect } from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVisibleContacts } from 'redux/contacts-selector';
import contactsOperations from 'redux/contacts-operations';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const deleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContact());
  }, [dispatch]);

  return (
    <div className={style.Contacts__container}>
      <ul className={style.Contact__list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id} className={style.Contact__item}>
              {contact.name} : {contact.number}
              <button
                type="button"
                onClick={() => {
                  deleteContact(contact.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
