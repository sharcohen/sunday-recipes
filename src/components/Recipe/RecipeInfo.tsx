import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { Recipe } from '../../services/api/types';
import { getPreparationTime } from '../../utils/utils';
import Text from '../Text';

interface RecipeInfoProps {
  item: Recipe;
  fullDetails?: boolean;
}

enum RecipeInfoProperties {
  calories = 'calories',
  carbos = 'carbos',
  fats = 'fats',
  proteins = 'proteins',
  difficulty = 'difficulty',
  country = 'country',
}

const RecipeInfo: FC<RecipeInfoProps> = ({ item, fullDetails }) => {
  const { t } = useTranslation();

  const prepTime = getPreparationTime(item.time);
  const infoProperties = Object.values(RecipeInfoProperties).map(infoProp => (
    <Text variant="property" key={infoProp}>
      {t(infoProp, { [infoProp]: item[infoProp] || t('na') })}
    </Text>
  ));
  return (
    <View style={styles.infoItem}>
      <Text variant="property">{t('preparationTime', { time: prepTime })}</Text>
      {infoProperties}
    </View>
  );
};

export default RecipeInfo;

const styles = StyleSheet.create({
  infoItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
