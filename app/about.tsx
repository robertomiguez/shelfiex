import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function About() {
  const { theme, styles } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[{ color: theme.text }, styles.text]}>About</Text>
    </View>
  );
}
