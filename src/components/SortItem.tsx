import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../theme/theme';
import { SortTypes } from '../types/types';
import { capitalizeFirstLetter } from '../utils/utils';
import Text from './Text';

interface SortItemProps {
  selected: boolean;
  type: SortTypes;
  onPress: (type: SortTypes) => void;
}
const SortItem: FC<SortItemProps> = ({ selected, type, onPress }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={() => onPress(type)}>
      <View style={styles.sortItem}>
        <Text
          variant="p"
          style={
            selected ? { color: theme.colors.primaryButtonColor } : undefined
          }>
          {capitalizeFirstLetter(type)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SortItem;

const styles = StyleSheet.create({
  sortItem: {
    paddingVertical: theme.spacing.xxs,
  },
});
