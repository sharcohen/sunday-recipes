import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import Text from '../Text';

interface RecipeHeadlineProps {
  text: string;
}

const RecipeHeadline: FC<RecipeHeadlineProps> = ({ text }) => {
  return <Text variant="headline">{text}</Text>;
};

export default RecipeHeadline;

const styles = StyleSheet.create({});
