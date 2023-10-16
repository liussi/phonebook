import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterSearch } from 'redux/filter/filterSlise';
import { selectfilter } from 'redux/filter/selector';
import { Box, Center, Input, Text } from '@chakra-ui/react';
export const Filter = () => {

  const { filter } = useSelector(selectfilter);
  const dispatch = useDispatch();

  const onFilterSearch = e => {
    const valueForm = e.target.value.toLowerCase();
    dispatch(setFilterSearch(valueForm));
  };
  
  return (
    <Center>
      <Box mb="20px">
        <Text mb="8px">Find contacts by name</Text>
        <Input
          type="text"
          value={filter}
          onChange={onFilterSearch}
          placeholder="Search..."
          size="md"
          width="auto"
        />
      </Box>
    </Center>
  );
};

