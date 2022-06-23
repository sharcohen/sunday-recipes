import React, { FC } from 'react';
import Text from '../Text';

interface RecipeDescriptionProps {
  text: string;
}
const RecipeDescription: FC<RecipeDescriptionProps> = ({ text }) => {
  return <Text variant="description">{text}</Text>;
};

export default RecipeDescription;
