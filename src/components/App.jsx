import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Global.style';
import { useEffect, useMemo } from 'react';
import store from '../store.js/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, addContacts } from '../store.js/contacts/contactSlise'
import { setFilterSearch } from 'store.js/filter/actions';
// import { addContacts, deleteContacts } from 'store.js/contacts/actions';

export function App() {

  const { contacts } = useSelector(store => store.contacts);
 const {filter} = useSelector(store => store.filter);
  console.log(filter);
  console.log(contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);



  const onAddContact = newContact => {
    if (offAddContact(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }

    dispatch(addContacts(newContact));
  };

  const offAddContact = newContactName => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newContactName.toLowerCase()
    );
  };


  const onFilterSearch = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilterSearch(value));
  };

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
    <>
      <Title>Phonebook</Title>
      <ContactForm
        contacts={contacts}
        onAddContact={onAddContact}
      />
      <Title>Contacts</Title>
      <Filter filter={filter} onFilterSearch={onFilterSearch} />
      <ContactList
        filteredContacts={getFilteredContacts}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
