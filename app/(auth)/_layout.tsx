import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../contexts/ThemeContext';
import { ThemeToggleButton } from '../../components/ThemeToggleButton';
import GuestOnly from '../../components/auth/GuestOnly';

export default function AuthLayout() {
  const { theme, isDark } = useTheme();
  return (
    <GuestOnly>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: true,
          animation: 'none',
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => <ThemeToggleButton />,
        }}
      ></Stack>
    </GuestOnly>
  );
}
