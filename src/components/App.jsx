import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Global.style';
import { useState, useEffect, useMemo } from 'react';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ] ??
      ''
    );
  });

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const appHandleSubmit = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const onAddContact = newContact => {
    if (offAddContact(newContact.name)) {
      alert('Contact with this name already exists!');
      return;
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const offAddContact = newContactName => {
    return contacts.some(
      contact => contact.name.toLowerCase() === newContactName.toLowerCase()
    );
  };

  const [filter, setFilter] = useState('');

  const onFilterSearch = e => {
    setFilter(e.target.value.toLowerCase());
  };

  const getFilteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [contacts, filter]);

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm
        contacts={contacts}
        onSubmit={appHandleSubmit}
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
