import { Box, Text } from '@chakra-ui/react';
import { TextSteles } from 'GlobalStyle';
export const Home = () => {
    return (
      <Box>
        <Text {...TextSteles}>Welcome to the contact book!</Text>
      </Box>
    );
}