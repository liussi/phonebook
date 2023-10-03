import { combineReducers } from "redux";
import { reducerContact } from "./contacts/reduсer";
import { reducerFilter } from "./filter/reduсer";

export const reducer = combineReducers({
  contacts: reducerContact,
  filter: reducerFilter
});