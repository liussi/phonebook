import React from 'react';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled'; 

export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ContactListWrapper>
      <ul>
        {filteredContacts.map((contact) => (
          <ContactListItem key={contact.id}>
            <ContactName>{contact.name}</ContactName>
            <ContactNumber>{contact.number}</ContactNumber>
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>Delete</DeleteButton>
          </ContactListItem>
        ))}
      </ul>
    </ContactListWrapper>
  );
};