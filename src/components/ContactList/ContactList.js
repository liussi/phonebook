import {
  ContactListWrapper,
  ContactListItem,
  ContactName,
  ContactNumber,
  DeleteButton,
} from './ContactList.styled';
import { deleteContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { selectfilter } from 'redux/filter/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectfilter);
  const items = useSelector(selectContacts);

  const filteredItems = () => {
    if (!filter) {
      return items;
    }

    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <ContactListWrapper>
      <ul>
        {filteredItems() &&
          filteredItems().map(contact => (
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
