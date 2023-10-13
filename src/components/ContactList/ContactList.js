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
  const { filter } = useSelector(getfilter);
  const items = useSelector(getContacts);

  const filteredItems = () => {
    if (!filter) {
      return items;
    }

    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };
console.log(items);
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
