import React from 'react';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterSearch } from 'redux/filter/filterSlise';
import { selectfilter } from 'redux/filter/selector';

export const Filter = () => {

  const { filter } = useSelector(selectfilter);
  const dispatch = useDispatch();

  const onFilterSearch = e => {
    const valueForm = e.target.value.toLowerCase();
    dispatch(setFilterSearch(valueForm));
  };
  
  return (
    <FilterWrapper>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterInput
        type="text"
        value={filter}
        onChange={onFilterSearch}
        placeholder="Search..."
      />
    </FilterWrapper>
  );
};

