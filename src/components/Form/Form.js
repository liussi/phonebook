import { Formik, useFormik } from 'formik';
import { object, string } from 'yup';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessageForm,
} from './Form.styled.js';

const schema = object({
  name: string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  phone: string().min(9).max(19).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: '', phone: '' },
  });

  const formHandleSubmit = (values,{resetForm}) => {
    const { name, phone } = values;

    dispatch(addContacts({ name, phone }));
    resetForm();
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={formHandleSubmit}
      initialValues={formik.initialValues}
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
            name="phone"
            placeholder="123-45-67"
            pattern="^[\d+().\s-]*\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessageForm name="phone" />
        </FormLabel>

        <FormButton type="submit">Add contact</FormButton>
      </FormWrapper>
    </Formik>
  );
}
