import React, { FC } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
} from 'react-native';
import EmptyList from '../../components/EmptyList';
import { Recipe } from '../../services/api/types';
import theme from '../../theme/theme';
import RecipeListItem from './RecipeListItem';

interface RecipeListProps {
  items: Recipe[] | undefined;
  isLoading: boolean;
  onRefresh: () => void;
}

const RecipeList: FC<RecipeListProps> = ({
  items = [],
  isLoading,
  onRefresh,
}) => {
  const renderItem: ListRenderItem<Recipe> = ({ item }) => {
    return <RecipeListItem item={item} />;
  };

  if (!items.length) {
    return isLoading ? (
      <ActivityIndicator />
    ) : (
      <EmptyList onPress={onRefresh} />
    );
  }

  return (
    <FlatList
      onRefresh={onRefresh}
      refreshing={isLoading}
      style={styles.list}
      showsVerticalScrollIndicator={false}
      data={items}
      renderItem={renderItem}
    />
  );
};

export default RecipeList;

const styles = StyleSheet.create({
  list: { paddingHorizontal: theme.spacing.mdl },
});
