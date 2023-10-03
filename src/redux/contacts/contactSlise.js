import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';


export const contactSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContacts: (state, { payload }) => {
            state.contacts = state.contacts.filter(
              contact => contact.id !== payload
            );
    },
  },
});


export const { addContacts, deleteContacts } = contactSlise.actions;
export const reducerContact = contactSlise.reducer;