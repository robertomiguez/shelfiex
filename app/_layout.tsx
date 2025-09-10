import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { ThemeToggleButton } from '../components/ThemeToggleButton';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootLayoutContent />
    </ThemeProvider>
  );
}

function RootLayoutContent() {
  const { theme, isDark } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          headerTitleStyle: { fontWeight: 'bold' },
          headerRight: () => <ThemeToggleButton />,
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: 'About',
            headerShown: true,
          }}
        />
      </Stack>
    </View>
  );
}
