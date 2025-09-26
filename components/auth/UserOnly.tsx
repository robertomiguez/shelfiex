import { useEffect } from 'react';
import { Text } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'expo-router';

interface UserOnlyProps {
  children: React.ReactNode;
}

interface UseUserResult {
  user: any;
  authChecked: boolean;
}

const UserOnly = ({ children }: UserOnlyProps) => {
  const { user, authChecked }: UseUserResult = useUser();
  const router = useRouter();
  useEffect(() => {
    if (authChecked && !user) {
      router.replace('/login');
    }
  }, [authChecked, user]);

  if (!authChecked || !user) {
    return <Text>Loading</Text>;
  }

  return children;
};

export default UserOnly;
