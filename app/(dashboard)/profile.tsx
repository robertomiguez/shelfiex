import { Text, View } from 'react-native';
import { useTheme } from '../../contexts/ThemeContext';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SAFE_AREA_EXTRA_TOP } from '../../constants/layout';

export default function Profile() {
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
      <Text style={[{ color: theme.text }, styles.text]}>Your email</Text>

      <Text style={[{ color: theme.text }, styles.text]}>
        Time to start reading some books...
      </Text>
    </View>
  );
}
