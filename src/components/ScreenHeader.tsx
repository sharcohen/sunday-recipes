import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import theme from '../theme/theme';
import BackButton from './BackButton';
import Text from './Text';

interface ScreenHeaderProps {
  text: string;
  onBackPress?: () => void;
}
const ScreenHeader: FC<ScreenHeaderProps> = ({ text, onBackPress }) => {
  return (
    <View style={styles.container}>
      {onBackPress && <BackButton onPress={onBackPress} />}
      <Text variant="header" style={styles.text}>
        {text}
      </Text>
    </View>
  );
};

export default ScreenHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: theme.colors.headerText,
  },
});
