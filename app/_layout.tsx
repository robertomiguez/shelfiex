import { View } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import { ThemeToggleButton } from '../components/ThemeToggleButton';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { UserProvider } from '../contexts/UserContext';
import { BooksProvider } from '../contexts/BooksContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <RootLayoutContent />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

function RootLayoutContent() {
  const { theme, isDark } = useTheme();

  return (
    <UserProvider>
      <BooksProvider>
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
              name="(auth)"
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="(dashboard)"
              options={{
                headerShown: false,
              }}
            />
          </Stack>
        </View>
      </BooksProvider>
    </UserProvider>
  );
}
