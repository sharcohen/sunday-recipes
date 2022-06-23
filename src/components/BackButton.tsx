import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import theme from '../theme/theme';
import { images } from '../utils/images';

interface BackButtonProps {
  onPress: () => void;
}
const BackButton: FC<BackButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={images.back} style={styles.button} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    tintColor: theme.colors.back,
    width: theme.iconsSize.md,
    height: theme.iconsSize.md,
  },
});
