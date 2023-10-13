import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/Form/Form';
import { Title } from 'components/Global.style';
import Loader from 'components/Loader/Loader';
import { getError, getIsLoading } from 'redux/contacts/selector';

export const Contacts = () => {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {getIsLoading && !getError && <Loader />}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
};
