import React, { FC } from 'react';
import {
  StyleSheet,
  Text as RNText,
  TextProps as RNTextProps,
} from 'react-native';
import theme from '../theme/theme';

interface TextProps extends RNTextProps {
  variant: keyof TextVariants;
}

const Text: FC<TextProps> = ({ variant = 'p', children, style, ...rest }) => {
  return (
    <RNText style={[textVariants[variant], style]} {...rest}>
      {children}
    </RNText>
  );
};

const textVariants = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 34,
    lineHeight: 42,
    color: theme.colors.headerText,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    color: theme.colors.titleText,
  },
  headline: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 20,
    color: theme.colors.descriptionText,
  },
  description: {
    fontWeight: 'normal',
    fontSize: 12,
    lineHeight: 20,
    marginVertical: theme.spacing.xs,
    color: theme.colors.descriptionText,
  },
  property: {
    fontWeight: 'normal',
    fontSize: 10,
    lineHeight: 16,
    marginEnd: theme.spacing.sm,
    marginVertical: theme.spacing.xxs,
    padding: theme.spacing.xxs,
    backgroundColor: theme.colors.recipeInfoItem,
    color: theme.colors.descriptionText,
  },
  p: {
    fontSize: 16,
    color: theme.colors.headerText,
  },
  button: {
    fontSize: 16,
    color: theme.colors.primaryButtonTextColor,
    padding: theme.spacing.xs,
  },
});

export type TextVariants = typeof textVariants;
export default Text;
