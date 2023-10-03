import { createSlice } from '@reduxjs/toolkit';
import { filtersInitialState } from './filtersInitialState';

export const filterSlise = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setFilterSearch: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const { setFilterSearch } = filterSlise.actions;
export const reducerFilter = filterSlise.reducer;
