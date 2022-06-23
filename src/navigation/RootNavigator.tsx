import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import RecipeDetailsScreen from '../screens/RecipeDetailsScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import { RootStackParamList, Routes } from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={Routes.RecipeListScreen}
        component={RecipeListScreen}
      />
      <RootStack.Screen
        name={Routes.RecipeDetailsScreen}
        component={RecipeDetailsScreen}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
