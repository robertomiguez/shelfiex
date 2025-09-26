import { StyleSheet } from 'react-native';

export const createThemedStyles = (theme: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 30,
      color: theme.text,
      textAlign: 'center',
    },
    link: {
      fontSize: 18,
      color: theme.link,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: theme.text,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 16,
      color: theme.text,
      marginBottom: 15,
    },
    btn: {
      backgroundColor: theme.btn,
      paddingHorizontal: 20,
      paddingVertical: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    btnPressed: {
      backgroundColor: theme.btnPressed,
      opacity: 0.8,
    },
    btnText: {
      color: theme.btnText,
      fontSize: 16,
      fontWeight: '600',
    },
    card: {
      backgroundColor: theme.card || theme.background,
      borderRadius: 12,
      padding: 16,
      marginVertical: 8,
      shadowColor: theme.shadow || '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    img: {
      marginVertical: 20,
      width: 100,
      height: 100,
    },
    input: {
      width: '80%',
      padding: 10,
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 8,
      marginBottom: 12,
      color: theme.text,
    },
  });
