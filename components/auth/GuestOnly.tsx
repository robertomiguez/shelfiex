import { useEffect } from 'react';

import { router } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useTheme } from '../../contexts/ThemeContext';

interface GuestOnlyProps {
  children: React.ReactNode;
}

interface UseGuestResult {
  user: any;
  authChecked: boolean;
}

const GuestOnly = ({ children }: GuestOnlyProps) => {
  const { theme } = useTheme();
  const { user, authChecked }: UseGuestResult = useUser();

  useEffect(() => {
    if (authChecked && user) {
      router.replace('/books');
    }
  }, [authChecked, user]);

  // 1. still loading
  if (!authChecked) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={theme.text} />
      </View>
    );
  }

  // 2. User authenticated
  if (user) {
    return null; // evita renderizar os filhos até navegar
  }

  // 3.Guest (not authenticated)
  return children;
};

export default GuestOnly;
