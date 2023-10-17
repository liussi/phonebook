import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { ArrowLeftIcon } from '@chakra-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Container>
      <Flex justifyContent="space-between" alignItems="center">
        <Button
          leftIcon={<ArrowLeftIcon />}
          as={Link}
          to="/"
        >
          Back
        </Button>
        <Text color="red" fontSize="6xl" as="b">
          Not Found
        </Text>
      </Flex>
    </Container>
  );
};

export default NotFound;
