import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import { Title } from 'components/Global.style';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContact } from 'redux/contacts/operations';
import { getError, getIsLoading } from 'redux/contacts/selector';

export const Contacts = () => {
    const dispatch = useDispatch();
    //   const isLoading = useSelector(getIsLoading);
    // const error = useSelector(getError);

    useEffect(() => {
      dispatch(fetchContact());
    }, [dispatch]);
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
