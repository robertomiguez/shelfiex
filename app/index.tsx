import { Text, View, Image, Pressable } from 'react-native';
import Logo from '../assets/logo.png';
import Button from '../components/Button';
import { useRouter } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../constants/layout';
import GuestOnly from '../components/auth/GuestOnly';

export default function Home() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();

  const router = useRouter();

  const handleSubmit = async () => {
    router.push('/login');
  };

  return (
    <GuestOnly>
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.background,
            paddingTop: insets.top + SAFE_AREA_EXTRA_TOP,
            justifyContent: 'center',
            paddingHorizontal: 20,
          },
        ]}
      >
        {/* Logo */}
        <Image source={Logo} style={styles.img} />

        {/* Headline */}
        <Text
          style={[styles.heading, { color: theme.text, textAlign: 'center' }]}
        >
          Welcome to ShelfieX
        </Text>
        <Text
          style={[
            styles.subtitle,
            {
              color: theme.secondaryText,
              textAlign: 'center',
              marginBottom: 40,
            },
          ]}
        >
          Organize your library, track your books, and discover new favorites.
        </Text>

        <Button title="Start Here" onPress={handleSubmit} />
      </View>
    </GuestOnly>
  );
}
