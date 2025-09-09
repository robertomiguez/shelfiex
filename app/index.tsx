import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />
      <Text style={styles.text}>Welcome to ShelfieX</Text>
      <View style={{ height: 24 }} />
      <Link href="/about" style={styles.link}>
        Go to About
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05b256',
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
    color: 'white',
  },
});
