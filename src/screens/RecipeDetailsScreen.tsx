import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import BaseScreen from '../components/BaseScreen';
import RecipeDescription from '../components/Recipe/RecipeDescription';
import RecipeHeadline from '../components/Recipe/RecipeHeadline';
import RecipeInfo from '../components/Recipe/RecipeInfo';
import RecipeTItle from '../components/Recipe/RecipeTItle';
import ScreenHeader from '../components/ScreenHeader';
import { RecipeDetailsScreenProps } from '../navigation/types';
import theme from '../theme/theme';

const IMAGE_HEIGHT = 350;
const RecipeDetailsScreen: FC<RecipeDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const { item } = route.params!;
  const { t } = useTranslation();

  const onBackPress = () => {
    navigation.goBack();
  };

  return (
    <BaseScreen>
      <ScreenHeader text={`${t('details')}`} onBackPress={onBackPress} />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.content}>
          <RecipeInfo item={item} />
          <RecipeTItle text={item.name} />
          <RecipeHeadline text={item.headline} />
          <RecipeDescription text={item.description} />
        </View>
      </ScrollView>
    </BaseScreen>
  );
};

export default RecipeDetailsScreen;

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    top: -theme.spacing.xxl,
    backgroundColor: theme.colors.cardBackground,
    borderRadius: theme.borderRadii.md,
    padding: theme.spacing.md,
    width: '95%',
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderRadius: theme.borderRadii.md,
    marginBottom: theme.spacing.xs,
  },
  scrollView: {
    paddingHorizontal: theme.spacing.md,
  },
});
