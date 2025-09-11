import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../../components/Button';
import { Link } from 'expo-router';

export default function Register() {
  const { theme, styles } = useTheme();
  const handleSubmit = () => {
    // Handle login logic here
    console.log('Register button pressed');
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[{ color: theme.text }, styles.text]}>register</Text>
      <Button title="Register" onPress={handleSubmit} />
      <View style={{ height: 24 }} />
      <Link href="/login" style={[{ color: theme.link }, styles.link]}>
        <Text style={[{ color: theme.text }, styles.text]}>Login instead</Text>
      </Link>
    </View>
  );
}
