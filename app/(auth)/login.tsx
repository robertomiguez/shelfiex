import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../../components/Button';
import { Link } from 'expo-router';

export default function Login() {
  const { theme, styles } = useTheme();
  const handleSubmit = () => {
    // Handle login logic here
    console.log('Login button pressed');
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[{ color: theme.text }, styles.text]}>login</Text>
      <Button title="Login" onPress={handleSubmit} />
      <View style={{ height: 24 }} />
      <Link href="/register" style={[{ color: theme.link }, styles.link]}>
        <Text style={[{ color: theme.text }, styles.text]}>
          Register instead
        </Text>
      </Link>
    </View>
  );
}
