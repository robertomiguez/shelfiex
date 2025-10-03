import { Alert } from 'react-native';

export const truncateString = (str: string, maxLength: number = 17) => {
  return str.length > maxLength ? str.substring(0, maxLength) + '...' : str;
};

export const handleRemoveItem = (
  id: string,
  title: string,
  onRemove: (id: string) => void
) => {
  Alert.alert('Remove Book', `Are you sure you want to remove "${title}"?`, [
    {
      text: 'Cancel',
      style: 'cancel',
    },
    {
      text: 'Remove',
      style: 'destructive',
      onPress: () => onRemove(id),
    },
  ]);
};

export const handleEditItem = (
  id: string,
  title: string,
  onEdit: (id: string) => void
) => {
  onEdit(id);
};
