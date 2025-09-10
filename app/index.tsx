import { StyleSheet, Text, View, Image } from 'react-native';
import Logo from '../assets/logo.png';
import { Link } from 'expo-router';
import { useTheme } from '../contexts/ThemeContext';

export default function Home() {
  const { theme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Image source={Logo} style={styles.img} />
      <Text style={[{ color: theme.text }, styles.text]}>
        Welcome to ShelfieX
      </Text>
      <View style={{ height: 24 }} />
      <Link href="/about" style={[{ color: theme.link }, styles.link]}>
        Go to About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    marginVertical: 20,
    width: 100,
    height: 100,
  },
  link: {
    fontSize: 18,
  },
});
