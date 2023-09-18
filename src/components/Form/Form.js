// import { useState } from 'react';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import { object, string } from 'yup';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessageForm,
} from './Form.styled.js';

const schema = object({
  name: string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .required('Required'),
  number: string().min(9).max(9).required('Required'),
});


export default function ContactForm({ onAddContact }) {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

const initialValues = { name: '', number: '' };

const formHandleSubmit = (values, { resetForm }) => {
  const { name, number } = values;

  if (name.trim() === '' && number.trim() === '') {
    return;
  }

  const newContact = {
    id: nanoid(),
    name: name,
    number: number,
  };

 onAddContact(newContact);
  resetForm();
};


  return (
    <Formik
      initialValues={initialValues}
      onSubmit={formHandleSubmit}
      validationSchema={schema}
    >
      <FormWrapper>
        <FormLabel>
          Name
          <FormInput
            type="text"
            name="name"
            placeholder="Name Lastname"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessageForm name="name" />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            type="tel"
            name="number"
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessageForm name="number" />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </FormWrapper>
    </Formik>
  );
}
