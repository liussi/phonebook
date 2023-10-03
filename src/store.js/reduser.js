import { combineReducers } from "redux";
import { reducerContact } from "./contacts/reduser";
import { reducerFilter } from "./filter/reduser";

export const reducer = combineReducers({
  contacts: reducerContact,
  filter: reducerFilter
});