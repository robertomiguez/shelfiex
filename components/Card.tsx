import { View, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

interface CardProps extends Omit<ViewProps, 'style'> {
  style?: StyleProp<ViewStyle>;
}

const Card = ({ style, children, ...props }: CardProps) => {
  const { theme, styles } = useTheme();

  return (
    <View style={[styles.card, style]} {...props}>
      {children}
    </View>
  );
};

export default Card;
