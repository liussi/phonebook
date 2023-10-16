import { extendTheme } from '@chakra-ui/react';


export const linkStyles = {
  textDecoration: 'none',
  padding: '12px',
  fontWeight: 700,
  bgClip: 'text',
  color: '#2a363b',
  fontWeight: 'extrabold',
  _hover: { color: '#e84a5f' },
};

export const TextSteles = {
  bgGradient: 'linear(to-l, #7928CA, #FF0080)',
  bgClip: 'text',
  fontSize: '6xl',
  textAlign: 'center'
};

export const InputStyled = {
  width: '50%',
  marginTop: '10px',
  
};
const theme = extendTheme({
  styles: {
    global: props => ({
      'html, body': {
        fontWeight: 'extrabold',
        fontSize: 'sm',
        lineHeight: 'tall',

      },
    }),
  },
});

export default theme;
