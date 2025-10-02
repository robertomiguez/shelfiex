import { Text, View, FlatList, Pressable } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useBooks } from '../../hooks/useBooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';
import Card from '../../components/Card';
import { useRouter } from 'expo-router';

export default function Books() {
  const { theme, styles } = useTheme();
  const insets = useSafeAreaInsets();
  const { books } = useBooks();
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
          <Card>
            <Pressable
              onPress={() => router.push(`/books/${item.id}`)}
              style={{ padding: 16 }}
            >
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>Written by {item.author}</Text>
            </Pressable>
          </Card>
        )}
        contentContainerStyle={{ padding: 3, gap: 3 }}
        ItemSeparatorComponent={() => <View style={{ height: 3 }} />}
      />
    </View>
  );
}
