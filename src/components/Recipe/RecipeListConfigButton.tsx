import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../../theme/theme';
import { images } from '../../utils/images';
import Text from '../Text';

interface RecipeListConfigButtonProps {
  onPress: () => void;
}
const RecipeListConfigButton: FC<RecipeListConfigButtonProps> = ({
  onPress,
}) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text variant="p">{t('sort')}</Text>
      <Image source={images.sort} style={styles.sortImage} />
    </TouchableOpacity>
  );
};

export default RecipeListConfigButton;

const styles = StyleSheet.create({
  container: {
    marginEnd: theme.spacing.mdl,
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortImage: {
    marginStart: theme.spacing.xs,
    tintColor: theme.colors.back,
    width: theme.iconsSize.md,
    height: theme.iconsSize.md,
    transform: [{ rotate: '90deg' }],
  },
});
