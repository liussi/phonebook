import { Button, Tag, TagLabel} from '@chakra-ui/react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <Tag size="lg" colorScheme="red" borderRadius="full" mr={10}>
        <TagLabel>{user.email}</TagLabel>
      </Tag>
      <Button
        type="button"
        onClick={handleLogOut}
        colorScheme="pink"
        variant="solid"
      >
        Logout
      </Button>
    </div>
  );
};
