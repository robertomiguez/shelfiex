import { useState } from 'react';
import { Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from '../../contexts/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';

import { useBooks } from '../../hooks/useBooks';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ErrorMessage from '../../components/ErrorMessage';
import { Book } from '../../types/Book';

export default function Create() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();
  const router = useRouter();

  const [book, setBook] = useState<Book>({
    title: '',
    author: '',
    description: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { addBook } = useBooks();

  const handleChange = (key: keyof Book, value: string) => {
    setBook((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (!book.title || !book.author || !book.description) {
      console.log('All fields are required');
      setError('All fields are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      await addBook(book);
      setBook({ title: '', author: '', description: '' });
      router.push('/books');
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
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
        <Text style={[{ color: theme.text }, styles.text]}>Add a new book</Text>

        <View style={{ height: 24 }} />
        <Input
          placeholder="Title"
          value={book.title}
          onChangeText={(text) => handleChange('title', text)}
        />
        <View style={{ height: 8 }} />
        <Input
          placeholder="Author"
          value={book.author}
          onChangeText={(text) => handleChange('author', text)}
        />
        <View style={{ height: 8 }} />
        <Input
          placeholder="Description"
          value={book.description}
          onChangeText={(text) => handleChange('description', text)}
          multiline
          numberOfLines={4}
          style={{ color: theme.text, height: 100, textAlignVertical: 'top' }}
        />

        <Button
          title={loading ? 'Adding...' : 'Add Book'}
          onPress={handleSubmit}
          disabled={loading || !book.title || !book.author || !book.description}
        />

        {error && <ErrorMessage message={error} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
