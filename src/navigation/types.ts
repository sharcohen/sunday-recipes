import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Recipe } from '../services/api/types';

export enum Routes {
  RecipeListScreen = 'RecipeListScreen',
  RecipeDetailsScreen = 'RecipeDetailsScreen'
}

export type RootStackParamList = {
  RecipeListScreen: undefined,
  RecipeDetailsScreen: {item: Recipe} | undefined
};


export type RecipeListScreenProps = NativeStackScreenProps<RootStackParamList, Routes.RecipeListScreen>
export type RecipeDetailsScreenProps = NativeStackScreenProps<RootStackParamList, Routes.RecipeDetailsScreen>