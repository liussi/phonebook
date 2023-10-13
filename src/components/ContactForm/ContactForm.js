import { Formik, useFormik } from 'formik';
import { object, string } from 'yup';
 import { useDispatch, useSelector } from 'react-redux';
import { addContacts } from 'redux/contacts/operations';
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormButton,
  ErrorMessageForm,
} from './Form.styled.js';
import { selectContacts } from 'redux/contacts/selector.js';

const schema = object({
  name: string().min(2, 'Too Short!').max(70, 'Too Long!').required('Required'),
  number: string().min(9).max(19).required('Required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

  const offAddContact = ({ name }) => {
    return items.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };
  const formik = useFormik({
    initialValues: { name: '', number: '' },
  });

  const formHandleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
 
    if (offAddContact({ name })) {
      alert('Contact with this name already exists!');
      return;
    }
    dispatch(addContacts({ name, number }));
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
            name="number"
            placeholder="123-45-67"
            pattern="^[\d+().\s-]*\d{1,9}$"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessageForm name="number" />
        </FormLabel>

        <FormButton type="submit">
          Add contact
        </FormButton>
      </FormWrapper>
    </Formik>
  );
}
// export default function ContactForm () {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = form.elements.name.value;
//     const number = form.elements.number.value;
    
//       dispatch(addContacts({ name, number }));
//       form.reset();

  

//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" />
//       <input name="number" />
//       <button type="submit">Add task</button>
//     </form>
//   );
// };
