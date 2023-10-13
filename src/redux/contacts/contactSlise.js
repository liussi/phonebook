// import { createSlice } from '@reduxjs/toolkit';
// import { contactsInitialState } from './initialState';
// import { fetchContact, addContacts, deleteContacts } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// export const contactSlise = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: {
//     [fetchContact.pending]: handlePending,
//     [fetchContact.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     [fetchContact.rejected]: handleRejected,
//     [addContacts.pending]: handlePending,
//     [addContacts.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//     },
//     [addContacts.rejected]: handleRejected,
//     [deleteContacts.pending]: handlePending,
//     [deleteContacts.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(contact => contact.id !== payload.id);
//     },
//     [deleteContacts.rejected]: handleRejected,
//   },
// });

// export const reducerContact = contactSlise.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { fetchContact, addContacts, deleteContacts } from './operations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = payload;
      })
      .addCase(fetchContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(payload);
      })
      .addCase(addContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(contact => contact.id !== payload.id);
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const reducerContact = contactSlice.reducer;
