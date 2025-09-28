import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface ErrorMessageProps {
  message: string | null;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  const { theme } = useTheme();

  if (!message) return null;

  return (
    <View style={{ marginVertical: 8 }}>
      <Text
        style={{
          color: theme.error,
          paddingVertical: 6,
          paddingHorizontal: 30,
          backgroundColor: theme.border,
          borderRadius: 12,
          textAlign: 'center',
          marginHorizontal: 30,
        }}
      >
        {message}
      </Text>
    </View>
  );
}
