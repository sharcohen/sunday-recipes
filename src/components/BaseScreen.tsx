import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../theme/theme';

const BaseScreen: FC = ({ children }) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default BaseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: theme.spacing.xs,
    backgroundColor: theme.colors.background,
  },
});
