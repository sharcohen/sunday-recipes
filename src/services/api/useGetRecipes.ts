import i18next from 'i18next';
import Toast from 'react-native-toast-message';
import { useQuery } from 'react-query';
import { getRecipesQuery } from './api';
import { Recipe } from './types';

interface UserGetRecipesOptions {
  onSuccess: (data: Recipe[]) => void;
  onError: (error: unknown) => void;
}

export const useGetRecipes = ({
  onError,
  onSuccess,
}: UserGetRecipesOptions) => {
  return useQuery<Recipe[], Error>('getRecipesQuery', getRecipesQuery, {
    onSuccess,
    onError: error => {
      Toast.show({
        position: 'bottom',
        type: 'error',
        text1: i18next.t('ohNo'),
        text2: i18next.t('errorOccurred'),
      });
      onError && onError(error);
    },
  });
};
