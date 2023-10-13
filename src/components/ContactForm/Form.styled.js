import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const FormWrapper = styled(Form)`
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f7f7f7;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const FormInput = styled(Field)`
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background-color: #ff6b6b;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorMessageForm = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;