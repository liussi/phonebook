// import { createReducer } from '@reduxjs/toolkit';
// import { contactsInitialState } from './initialState';
// import { deleteContacts, addContacts } from './actions';

// export const reducerContact = createReducer(contactsInitialState, {
//   [addContacts]: (state, { payload }) => ({
//     ...state,
//     contacts: [...(state.contacts || []), payload],
//   }),
//   [deleteContacts]: (state, { payload }) => ({
//     ...state,
//     contacts: state.contacts.filter(contact => contact.id !== payload),
//   }),
// });
