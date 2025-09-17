import { Text, View, Image } from 'react-native';
import Logo from '../assets/logo.png';
import { Link } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../constants/layout';

export default function Home() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          paddingTop: insets.top + SAFE_AREA_EXTRA_TOP,
        },
      ]}
    >
      <Image source={Logo} style={styles.img} />
      <Text style={[{ color: theme.text }, styles.text]}>
        Welcome to ShelfieX
      </Text>
      <View style={{ height: 24 }} />
      <Link href="/login" style={[{ color: theme.link }, styles.link]}>
        Login
      </Link>
      <Link href="/register" style={[{ color: theme.link }, styles.link]}>
        Register
      </Link>
      <Link href="/profile" style={[{ color: theme.link }, styles.link]}>
        Profile
      </Link>
    </View>
  );
}
