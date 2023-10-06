import React, { useMemo } from 'react';
import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';
import { deleteContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/selector';
import { getfilter } from 'redux/filter/selector';

export const ContactList = () => {

  const dispatch = useDispatch();
 const filter = useSelector(getfilter);
 const items = useSelector(getContacts);
  
  console.log('filter:', filter);
  console.log('items:', items);
  
//   const getFilteredContacts = useMemo(() => {
//      if (!items || !Array.isArray(items)) {
//        return [];
//      }
// const normalizedFilter = typeof filter === 'string' ? filter.toLowerCase() : '';
//     return items.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//       );
//     }, [items, filter]);
    
    
      // if (!items || items.length === 0) {
      //   return <div>Loading...</div>; // Можете відобразити будь-який інший UI, що показує завантаження даних.
      // }
  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
  return (
    <ContactListWrapper>
      <ul>
        {items &&
          items.map(contact => (
            <ContactListItem key={contact.id}>
              <ContactName>{contact.name}</ContactName>
              <ContactNumber>{contact.phone}</ContactNumber>
              <DeleteButton onClick={() => deleteContact(contact.id)}>
                Delete
              </DeleteButton>
            </ContactListItem>
          ))}
      </ul>
    </ContactListWrapper>
  );
};
