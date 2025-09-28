import { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';
import { useUser } from '../../hooks/useUser';
import ErrorMessage from '../../components/ErrorMessage';

export default function Login() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { login } = useUser();

  const handleSubmit = async () => {
    Keyboard.dismiss();
    setError(null);
    try {
      await login(email, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
            paddingTop: insets.top + SAFE_AREA_EXTRA_TOP,
          },
        ]}
      >
        <Text style={[{ color: theme.text }, styles.text]}>
          Login to your account
        </Text>
        <View style={{ height: 24 }} />
        <Input placeholder="Email" onChangeText={setEmail} value={email} />
        <Input
          placeholder="Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />

        <Button title="Login" onPress={handleSubmit} />

        {error && <ErrorMessage message={error} />}

        <View style={{ height: 14 }} />
        <Link href="/register" style={[{ color: theme.link }, styles.link]}>
          <Text style={[{ color: theme.text }, styles.text]}>
            Register instead
          </Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
}
