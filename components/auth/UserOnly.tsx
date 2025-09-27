import { ActivityIndicator } from 'react-native';
import { useUser } from '../../hooks/useUser';
import { useTheme } from '../../contexts/ThemeContext';
import LoginScreen from '../../app/(auth)/login';

interface UserOnlyProps {
  children: React.ReactNode;
}

interface UseUserResult {
  user: any;
  authChecked: boolean;
}

const UserOnly = ({ children }: UserOnlyProps) => {
  const { theme } = useTheme();
  const { user, authChecked }: UseUserResult = useUser();
  if (!authChecked) {
    return (
      <ActivityIndicator
        style={{ marginTop: 20 }}
        size="large"
        color={theme.text}
      />
    );
  }

  if (authChecked && !user) {
    return <LoginScreen />;
  }

  return children;
};

export default UserOnly;
