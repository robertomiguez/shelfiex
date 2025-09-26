import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useUser } from '../../hooks/useUser';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';
import Button from '../../components/Button';

export default function Profile() {
  const { logout, user } = useUser();
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
      <Text style={[{ color: theme.text }, styles.text]}>{user?.email}</Text>

      <Text style={[{ color: theme.text }, styles.text]}>
        Time to start reading some books...
      </Text>
      <View style={{ height: 24 }} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
