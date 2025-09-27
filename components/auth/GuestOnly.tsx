import { ActivityIndicator, View } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useTheme } from '../../contexts/ThemeContext';
import Profile from '../../app/(dashboard)/profile';

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
    return <Profile />;
  }

  // 3.Guest (not authenticated)
  return children;
};

export default GuestOnly;
