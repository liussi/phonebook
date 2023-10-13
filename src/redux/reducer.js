import { combineReducers } from "redux";
import { reducerContact } from "./contacts/contactSlise";
import { reducerFilter } from "./filter/filterSlise";
import { authReduser } from "./auth/authSlise";

export const reducer = combineReducers({
  auth:authReduser,
  contacts: reducerContact,
  filter: reducerFilter
});