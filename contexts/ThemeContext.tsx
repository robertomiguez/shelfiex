import React, { createContext, useContext, useEffect, useState } from 'react';
import { Colors } from '../constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define ThemeContextType interface
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// Create Theme Context
export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  const theme = Colors[context.isDark ? 'dark' : 'light'];

  return {
    ...context,
    theme,
  };
};

// Theme Provider Component
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false); // Default to light theme
  const [isLoading, setIsLoading] = useState(true);

  // Load theme preference on app start
  useEffect(() => {
    loadThemePreference();
  }, []);

  const loadThemePreference = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('theme_preference');
      if (savedTheme !== null) {
        setIsDark(savedTheme === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme preference:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = async () => {
    try {
      const newTheme = !isDark;
      setIsDark(newTheme);
      await AsyncStorage.setItem(
        'theme_preference',
        newTheme ? 'dark' : 'light'
      );
    } catch (error) {
      console.error('Error saving theme preference:', error);
    }
  };

  // Don't render children until theme is loaded
  if (isLoading) {
    return null; // Or return a loading spinner if you prefer
  }

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
