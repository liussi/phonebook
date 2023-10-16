import { Box, Link as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { linkStyles } from '../../GlobalStyle';

export const AuthNav = () => {

  return (
    <Box>
      <ChakraLink as={ReactRouterLink} to="/register" {...linkStyles}>
        Register
      </ChakraLink>
      <ChakraLink as={ReactRouterLink} to="/login" {...linkStyles}>
        Log In
      </ChakraLink>
    </Box>
  );
};
