import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RecipeListScreenProps, Routes } from '../../navigation/types';
import { Recipe } from '../../services/api/types';
import theme from '../../theme/theme';
import RecipeHeadline from './RecipeHeadline';
import RecipeInfo from './RecipeInfo';
import RecipeTItle from './RecipeTItle';

const THUMB_HEIGHT = 150;
interface RecipeListItemProps {
  item: Recipe;
}
const RecipeListItem: FC<RecipeListItemProps> = ({ item }) => {
  const { navigate } = useNavigation<RecipeListScreenProps['navigation']>();

  const onItemPress = () => {
    navigate(Routes.RecipeDetailsScreen, { item });
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.thumb }} style={styles.thumb} />
        <View style={styles.cardContent}>
          <RecipeInfo item={item} />
          <RecipeTItle text={item.name} />
          <RecipeHeadline text={item.headline} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeListItem;

const styles = StyleSheet.create({
  thumb: {
    width: '100%',
    height: THUMB_HEIGHT,
    borderRadius: theme.borderRadii.md,
    marginBottom: theme.spacing.xs,
  },
  image: {
    width: '100%',
    height: '50%',
  },
  cardContainer: {
    backgroundColor: theme.colors.cardBackground,
    borderColor: theme.colors.cardBackground,
    borderWidth: theme.spacing.xxs,
    borderRadius: theme.borderRadii.md,
    marginVertical: theme.spacing.xs,
  },
  cardContent: {
    padding: theme.spacing.sm,
  },
});
