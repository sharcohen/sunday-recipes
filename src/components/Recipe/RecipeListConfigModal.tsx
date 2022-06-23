import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useOrientation } from '../../hooks/useOrientation';
import theme from '../../theme/theme';
import { SortTypes } from '../../types/types';
import Button from '../Button';
import SortItem from '../SortItem';
import Text from '../Text';

interface RecipeListConfigModalProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  onSortSelected: (value: SortTypes) => void;
  sortType: SortTypes;
}
const RecipeListConfigModal: FC<RecipeListConfigModalProps> = ({
  isVisible,
  setIsVisible,
  onSortSelected,
  sortType,
}) => {
  const { isLandscape } = useOrientation();
  const { top } = useSafeAreaInsets();
  const { t } = useTranslation();

  const closeModal = () => {
    setIsVisible(false);
  };

  const sortItems = Object.values(SortTypes).map(type => (
    <SortItem
      key={type}
      selected={type === sortType}
      onPress={onSortSelected}
      type={type}
    />
  ));

  return (
    <Modal
      isVisible={isVisible}
      animationIn={'slideInDown'}
      animationOut={'slideOutUp'}
      swipeDirection={'up'}
      onSwipeComplete={closeModal}
      style={[styles.modal, Platform.OS == 'ios' && { paddingTop: top }]}
      onBackButtonPress={closeModal}
      onDismiss={closeModal}
      propagateSwipe
      backdropColor={theme.colors.transparent}
      onBackdropPress={closeModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text variant="header" style={styles.sortText}>
            {t('sortOrder')}
          </Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={isLandscape && styles.listLandscape}>
            {sortItems}
          </ScrollView>
          <Button variant="primary" title={t('close')} onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

export default RecipeListConfigModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
  modalContainer: {
    flex: 1,
  },
  modalContent: {
    padding: theme.spacing.mdl,
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    borderBottomStartRadius: theme.borderRadii.sm,
    borderBottomEndRadius: theme.borderRadii.sm,
  },
  sortText: {
    paddingStart: 0,
  },
  listLandscape: {
    alignItems: 'center',
    paddingBottom: theme.spacing.md,
  },
});
