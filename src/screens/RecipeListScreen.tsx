import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import BaseScreen from '../components/BaseScreen';
import RecipeList from '../components/Recipe/RecipeList';
import RecipeListConfigButton from '../components/Recipe/RecipeListConfigButton';
import RecipeListConfigModal from '../components/Recipe/RecipeListConfigModal';
import ScreenHeader from '../components/ScreenHeader';
import { RecipeListScreenProps } from '../navigation/types';
import { useGetRecipes } from '../services/api/useGetRecipes';
import { SortTypes } from '../types/types';
import { sortRecipes } from '../utils/utils';

const RecipeListScreen: FC<RecipeListScreenProps> = () => {
  const [sortBy, setSortBy] = useState<SortTypes>(SortTypes.time);
  const [sortModalVisible, setSortModalVisible] = useState(false);

  const { t } = useTranslation();
  const onSuccess = () => {};
  const onError = () => {};

  const { data, isLoading, error, refetch } = useGetRecipes({
    onError,
    onSuccess,
  });

  const recipeList = useMemo(() => {
    let sortedData = [...(data || [])];
    sortedData = sortRecipes(data, sortBy);
    return sortedData;
  }, [data, sortBy]);

  const onRefresh = () => {
    refetch();
  };

  const openSortModal = () => {
    setSortModalVisible(true);
  };

  const onSortSelected = (value: SortTypes) => {
    setSortBy(value);
  };

  return (
    <>
      <BaseScreen>
        <View style={styles.headerContainer}>
          <ScreenHeader text={t('recipes')} />
          <RecipeListConfigButton onPress={openSortModal} />
        </View>
        <View style={styles.list}>
          <RecipeList
            items={recipeList}
            isLoading={isLoading}
            onRefresh={onRefresh}
          />
        </View>
      </BaseScreen>
      <RecipeListConfigModal
        sortType={sortBy}
        isVisible={sortModalVisible}
        setIsVisible={setSortModalVisible}
        onSortSelected={onSortSelected}
      />
    </>
  );
};

export default RecipeListScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});
