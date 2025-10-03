import { Text, View, FlatList, Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useBooks } from '../../hooks/useBooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';
import Card from '../../components/Card';
import { useRouter } from 'expo-router';
import {
  truncateString,
  handleRemoveItem,
  handleEditItem,
} from '../../lib/utils';

export default function Books() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();
  const { books, removeBook } = useBooks();
  const router = useRouter();

  const editBook = ($id: string) => {
    router.push(`/bookForm?$id=${$id}`);
  };

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
      <Text style={[styles.heading, { color: theme.text }]}>
        Your Reading List
      </Text>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Card
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Pressable
              onPress={() => router.push(`/books/${item.$id}`)}
              style={{ padding: 16 }}
            >
              <Text style={styles.title}>{truncateString(item.title)}</Text>
              <Text style={styles.author}>Written by {item.author}</Text>
            </Pressable>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 10,
              }}
            >
              <Pressable
                onPress={() =>
                  handleRemoveItem(item.$id as string, item.title, removeBook)
                }
                style={({ pressed }) => [
                  styles.smallFab,
                  { opacity: pressed ? 0.8 : 1, marginRight: 8 },
                ]}
              >
                <Text style={styles.smallFabText}>✕</Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  handleEditItem(item.$id as string, item.title, editBook)
                }
                style={({ pressed }) => [
                  styles.smallFab,
                  { opacity: pressed ? 0.8 : 1 },
                ]}
              >
                <Text style={styles.smallFabText}>✎</Text>
              </Pressable>
            </View>
          </Card>
        )}
        contentContainerStyle={{ padding: 3, gap: 3, paddingBottom: 80 }}
        ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
      />

      <Pressable
        onPress={() => router.push('/bookForm')}
        style={({ pressed }) => [
          styles.fab,
          {
            position: 'absolute',
            right: 20,
            opacity: pressed ? 0.8 : 1,
            top: insets.bottom + 5,
          },
        ]}
      >
        <Text style={styles.fabText}>+</Text>
      </Pressable>
    </View>
  );
}
