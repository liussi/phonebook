import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selector';
import { Container, Spinner, Text } from '@chakra-ui/react';
import { TextSteles } from 'GlobalStyle';

export const Contacts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContact());
    }, [dispatch]);
  
  return (
    <Container pb='50px'>
      <Text {...TextSteles}>Phonebook</Text>
      <ContactForm />
      {selectIsLoading && !selectError && <Spinner color="red.500" />}
      <Text {...TextSteles}>Contacts</Text>
      <Filter />
      <ContactList />
    </Container>
  );
};
