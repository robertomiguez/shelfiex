import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTheme } from '../../../contexts/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../../constants/layout';
import { useBooks } from '../../../hooks/useBooks';
import Card from '../../../components/Card';

const BookDetails = () => {
  const insets = useSafeAreaInsets();
  const { theme, styles } = useTheme();

  const { id } = useLocalSearchParams();
  const { books } = useBooks();
  const book = books.find((b) => b.id === id);
  console.log(id);
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
      <Text style={[styles.heading, { color: theme.text }]}>Book Details</Text>
      <Card style={{ padding: 16, marginTop: 10 }}>
        <Text style={[styles.title, { color: theme.text }]}>{book?.title}</Text>
        <Text style={styles.author}>Written by {book?.author}</Text>
        <Text style={styles.description}>{book?.description}</Text>
        <Text style={styles.updatedAt}>
          Last updated:{' '}
          {book?.updateAt ? new Date(book.updateAt).toLocaleString() : 'N/A'}
        </Text>
      </Card>
    </View>
  );
};

export default BookDetails;
