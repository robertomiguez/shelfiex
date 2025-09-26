import { TextInput, TextInputProps, StyleProp, TextStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface InputProps extends Omit<TextInputProps, 'style'> {
  style?: StyleProp<TextStyle>;
}

const Input = ({ style, placeholderTextColor, ...props }: InputProps) => {
  const { theme, styles } = useTheme();

  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={placeholderTextColor || theme.placeholderText}
      {...props}
    />
  );
};

export default Input;
