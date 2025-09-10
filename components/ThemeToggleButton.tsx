import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggleButton() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={{
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: theme.background,
        borderWidth: 2,
        borderColor: theme.title,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Ionicons
        name={isDark ? 'moon' : 'sunny'}
        size={18}
        color={theme.title}
      />
    </TouchableOpacity>
  );
}
