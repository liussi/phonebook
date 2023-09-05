import React from 'react';
import { FilterWrapper, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ onFilterSearch, filter }) => {
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

