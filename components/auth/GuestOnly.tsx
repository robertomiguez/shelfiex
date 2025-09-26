import { useEffect } from 'react';
import { Text } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useRouter } from 'expo-router';

interface GuestOnlyProps {
  children: React.ReactNode;
}

interface UseGuestResult {
  user: any;
  authChecked: boolean;
}

const GuestOnly = ({ children }: GuestOnlyProps) => {
  const { user, authChecked }: UseGuestResult = useUser();
  const router = useRouter();
  useEffect(() => {
    if (authChecked && user) {
      router.replace('/profile');
    }
  }, [authChecked, user]);

  if (!authChecked || user) {
    return <Text>Loading</Text>;
  }

  return children;
};

export default GuestOnly;
