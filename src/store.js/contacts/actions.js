const { CREATE_CONTACTS, DELITE_CONTACTS } = require('./types');

export const onAddContacts = value => ({
  type: CREATE_CONTACTS,
  payload: value,
});
export const deleteContacts = value => ({
  type: DELITE_CONTACTS,
  payload: value,
});
