import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Global.style';

export function App() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm   />
      <Title>Contacts</Title>
      <Filter  />
      <ContactList
      />
    </>
  );
}
