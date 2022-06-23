import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import theme from '../theme/theme';
import Button from './Button';
import Text from './Text';

interface EmptyListProps {
  onPress: () => void;
}
const EmptyList: FC<EmptyListProps> = ({ onPress }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text variant="p" style={styles.text}>
        {t('nothingToShow')}
      </Text>
      <Button title={t('refresh')} onPress={onPress} variant="primary" />
    </View>
  );
};

export default EmptyList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: theme.spacing.xxxl,
    marginBottom: theme.spacing.mdl,
  },
});
