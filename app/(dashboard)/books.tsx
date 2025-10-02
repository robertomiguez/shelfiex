import { Text, View, FlatList, Pressable } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useBooks } from '../../hooks/useBooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';
import Card from '../../components/Card';
import { useRouter } from 'expo-router';
import { truncateString, handleRemoveItem } from '../../lib/utils';

export default function Books() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();
  const { books, removeBook } = useBooks();
  const router = useRouter();

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
              onPress={() => router.push(`/books/${item.id}`)}
              style={{ padding: 16 }}
            >
              <Text style={styles.title}>{truncateString(item.title)}</Text>
              <Text style={styles.author}>Written by {item.author}</Text>
            </Pressable>
            <Pressable
              onPress={() =>
                handleRemoveItem(item.id as string, item.title, removeBook)
              }
              style={{
                padding: 16,
                marginRight: 8,
              }}
            >
              <Text style={{ color: theme.error || '#ff4444', fontSize: 18 }}>
                ✕
              </Text>
            </Pressable>
          </Card>
        )}
        contentContainerStyle={{ padding: 3, gap: 3 }}
        ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
      />
    </View>
  );
}
