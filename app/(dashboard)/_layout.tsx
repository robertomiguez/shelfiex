import { Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from '../../contexts/ThemeContext';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import UserOnly from '../../components/auth/UserOnly';

export default function DashboardLayout() {
  const { theme, isDark } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <UserOnly>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            height: 100,
          },
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
        }}
      >
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'person' : 'person-outline'}
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="books"
          options={{
            title: 'Books',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'book' : 'book-outline'}
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'create' : 'create-outline'}
                size={24}
                color={focused ? theme.iconColorFocused : theme.iconColor}
              />
            ),
          }}
        />
        <Tabs.Screen name="books/[id]" options={{ href: null }} />
      </Tabs>
    </UserOnly>
  );
}
