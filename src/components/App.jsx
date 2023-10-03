import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Global.style';
import { useState, useEffect, useMemo } from 'react';
import '../store.js/store';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, onAddContacts } from 'store.js/contacts/actions';
import { FILTER_SEARCH } from 'store.js/filter/types';
import { filterSearch, setFilterSearch } from 'store.js/filter/actions';
import { store } from '../store.js/store';

export function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return (
  //     JSON.parse(localStorage.getItem('contacts')) ?? [
  //       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //     ] ??
  //     ''
  //   );
  // });

  const { contacts} = useSelector(store => store.contacts);
 const {filter} = useSelector(store => store.filter);
  console.log(filter);
  console.log(store)

  const dispatch = useDispatch();

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  //  ???? // const appHandleSubmit = newContact => {
  //   setContacts(prevContacts => [...prevContacts, newContact]);
  // };

  const onAddContact = newContact => {
    if (offAddContact(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }

    dispatch(onAddContacts(newContact));
  };

  const offAddContact = newContactName => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newContactName.toLowerCase()
    );
  };

  // const [filter, setFilter] = useState('');

  const onFilterSearch = e => {
    const value = e.target.value.toLowerCase();
    // setFilter(value);
    console.log('Filter Value:', value); // Додайте цей рядок для виводу значення filter у консоль

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
