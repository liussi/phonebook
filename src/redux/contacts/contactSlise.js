import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';
import { fetchContact, addContacts, deleteContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContact.pending]: handlePending,
    [fetchContact.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContact.rejected]: handleRejected,
    [addContacts.pending]: handlePending,
    [addContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContacts.rejected]: handleRejected,
    [deleteContacts.pending]: handlePending,
    [deleteContacts.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(contact => contact.id !== payload.id);
    },
    [deleteContacts.rejected]: handleRejected,
  },
});

// export const { addContacts, fetchContact, deleteContacts } = contactSlise.actions;
export const reducerContact = contactSlise.reducer;