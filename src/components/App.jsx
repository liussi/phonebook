import ContactForm from './Form/Form';
import 'react-toastify/dist/ReactToastify.css';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Global.style';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selector';

export function App() {
  const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  
    useEffect(() => {
      dispatch(fetchContact());
    }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </>
  );
}
