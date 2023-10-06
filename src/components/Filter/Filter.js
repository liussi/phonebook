import React from 'react';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterSearch } from 'redux/filter/filterSlise';
import { getfilter } from 'redux/filter/selector';

export const Filter = () => {

  const  {filter}  = useSelector(getfilter);
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

