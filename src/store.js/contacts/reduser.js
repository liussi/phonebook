import { initialState } from "./initialState";
import { CREATE_CONTACTS, DELITE_CONTACTS } from "./types";

export const reducerContact = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_CONTACTS:
      return {
        ...state,
        contacts: [...(state.contacts || []), payload],
      };
      case DELITE_CONTACTS:
         return {
           ...state,
           contacts: state.contacts.filter(contact => contact.id !== payload),
         };
    default:
      return state;
  }
};
