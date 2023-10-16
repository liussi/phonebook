import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selector';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

const schema = object({
  name: string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  number: string().min(9).max(19).required('Required'),
});

export default function ContactForm() {
  const toast = useToast();
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const offAddContact = ({ name }) => {
    return items.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const formHandleSubmit = (values, { resetForm }) => {
    const { name, number } = values;

    if (offAddContact({ name })) {
      toast({
        title: 'An error occurred.',
        description: 'Contact with this name already exists!',
        status: 'error',
        duration: 9000,
        isClosable: true,
        position: 'top',
      });
      return;
    }

    dispatch(addContacts({ name, number }));
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={formHandleSubmit}
      initialValues={{ name: '', number: '' }}
    >
      <Form>
        <FormControl>
          <FormLabel>
            Name
            <Field
              as={Input}
              type="text"
              name="name"
              placeholder="Name Lastname"
            />
            <ErrorMessage name="name" component="div" />
          </FormLabel>

          <FormLabel>
            Number
            <Field
              as={Input}
              type="tel"
              name="number"
              placeholder="123-45-67"
            />
            <ErrorMessage name="number" component="div" />
          </FormLabel>
          <Button type="submit" colorScheme="pink" marginEnd variant="outline">
            Add contact
          </Button>
        </FormControl>
      </Form>
    </Formik>
  );
}
