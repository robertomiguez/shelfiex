import {
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
} from 'react-native';
import { ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ButtonProps extends Omit<PressableProps, 'children'> {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  children?: ReactNode;
}

const Button = ({
  style,
  textStyle,
  title,
  children,
  ...props
}: ButtonProps) => {
  const { styles } = useTheme();

  const renderContent = () => {
    if (title) {
      return <Text style={[styles.btnText, textStyle]}>{title}</Text>;
    }
    return children;
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.btn, pressed && styles.btnPressed, style]}
      {...props}
    >
      {renderContent()}
    </Pressable>
  );
};

export default Button;
