
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Container,
} from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <FormControl>
            <FormLabel>
              <FormHelperText>Email</FormHelperText>
              <Field
                type="email"
                name="email"
                placeholder="Rosie_Simpson@gmail.com"
                as={Input}
              />
            </FormLabel>
            <FormLabel>
              <FormHelperText>Password</FormHelperText>
              <Field
                type="password"
                name="password"
                placeholder="*******"
                as={Input}

              />
            </FormLabel>
            <Button type="submit" colorScheme="pink" variant="solid">
              Log In
            </Button>
          </FormControl>
        </Form>
      </Formik>
    </Container>
  );
};
