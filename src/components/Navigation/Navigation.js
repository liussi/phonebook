import { useAuth } from 'hooks';
import { Box, Text as ChakraLink } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { linkStyles } from '../../GlobalStyle';
import { ThemeToggle } from 'components/ThemeToggle/ThemeToggle';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <ChakraLink to="/" as={ReactRouterLink} {...linkStyles}>
        Home
      </ChakraLink>
      {isLoggedIn && (
        <ChakraLink to="/contacts" as={ReactRouterLink} {...linkStyles}>
          Contacts
        </ChakraLink>
      )}
      <ThemeToggle />
    </Box>
  );
};
