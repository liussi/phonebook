import { combineReducers } from "redux";
import { reducerContact } from "./contacts/contactSlise";
import { reducerFilter } from "./filter/filterSlise";

export const reducer = combineReducers({
  contacts: reducerContact,
  filter: reducerFilter
});