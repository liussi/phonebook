import React, { useMemo } from 'react';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';
import { deleteContacts } from 'redux/contacts/contactSlise';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { getfilter } from 'redux/filter/selector';

export const ContactList = () => {

  const dispatch = useDispatch();
  const { filter } = useSelector(getfilter);
  const { contacts } = useSelector(getContacts);

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
  
  return (
    <ContactListWrapper>
      <ul>
        {getFilteredContacts.map(contact => (
          <ContactListItem key={contact.id}>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <DeleteButton onClick={() => deleteContact(contact.id)}>
              Delete
            </DeleteButton>
          </ContactListItem>
        ))}
      </ul>
    </ContactListWrapper>
  );
};
