import { filtersInitialState } from "./filtersInitialState";
import { FILTER_SEARCH } from "./types";

export const reducerFilter = (state = filtersInitialState, { type, payload }) => {
  switch (type) {
    case FILTER_SEARCH:
        return {
          ...state,
          filter: payload,
        };

    default:
      return state;
  }
};
