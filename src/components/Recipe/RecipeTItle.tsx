import React, { FC } from 'react';
import Text from '../Text';

interface RecipeTItleProps {
  text: string;
}
const RecipeTItle: FC<RecipeTItleProps> = ({ text }) => {
  return <Text variant="title">{text}</Text>;
};

export default RecipeTItle;
