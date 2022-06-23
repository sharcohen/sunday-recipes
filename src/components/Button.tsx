import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import theme from '../theme/theme';
import Text, { TextVariants } from './Text';

interface ButtonProps {
  variant: keyof ButtonVariants;
  title: string;
  onPress: (args?: any) => void;
}
const Button: FC<ButtonProps> = ({ onPress, title, variant = 'primary' }) => {
  const { button, textVariant } = buttonVariants[variant];
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={button}>
        <Text variant={textVariant}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: theme.colors.primaryButtonColor,
    borderRadius: theme.borderRadii.sm,
  },
});

const buttonVariants = {
  primary: {
    button: styles.primary,
    textVariant: 'button' as keyof TextVariants,
  },
};

export type ButtonVariants = typeof buttonVariants;
export default Button;
