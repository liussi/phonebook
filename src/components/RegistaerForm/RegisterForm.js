import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Container,
} from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    resetForm();
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormControl>
            <FormLabel>
              <FormHelperText>Username</FormHelperText>
              <Field
                type="text"
                name="name"
                as={Input}
                placeholder="Rosie Simpson"
              />
            </FormLabel>
            <FormLabel>
              <FormHelperText>Email</FormHelperText>
              <Field
                type="email"
                name="email"
                as={Input}
                placeholder="Rosie_Simpson@gmail.com"            
              />
            </FormLabel>
            <FormLabel>
              <FormHelperText>Password</FormHelperText>
              <Field
                type="password"
                name="password"
                as={Input}
                placeholder="*******"           
              />
            </FormLabel>
            <Button type="submit" colorScheme="pink" variant="solid">
              Register
            </Button>
          </FormControl>
        </Form>
      </Formik>
    </Container>
  );
};
