import { FILTER_SEARCH } from "./types";

export const setFilterSearch = value => ({
  type: FILTER_SEARCH,
  payload: value,
});
