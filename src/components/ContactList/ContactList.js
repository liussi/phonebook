
import { deleteContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { selectfilter } from 'redux/filter/selector';
import { Box, Button, Flex, List,  ListItem } from '@chakra-ui/react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector(selectfilter);
  const items = useSelector(selectContacts);

  const filteredItems = () => {
    if (!filter) {
      return items;
    }
    return items.filter(contact => contact.name.toLowerCase().includes(filter));
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <Box>
      <List spacing={3}>
        {filteredItems() &&
          filteredItems().map(contact => (
            <ListItem key={contact.id}>
              <Flex justifyContent="space-between" gap="50px" alignItems='center'>
                <span>
                  {contact.name} - {contact.number}
                </span>

                <Button
                  onClick={() => deleteContact(contact.id)}
                  colorScheme="pink"
                  variant="outline"
                >
                  Delete
                </Button>
              </Flex>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};
