const palette = {
  bluePrimary: '#47B5FF',
  blueSecondary: '#1363DF',
  blueLight: '#DFF6FF',
  blueGray: '#647C90',

  background: '#06283D',
  overlay: 'rgba(0,0,0,0.7)',

  transparent: 'transparent',
  white: '#ffffff',
  black: '#000000',
};
const colors = {
  background: palette.background,
  back: palette.white,
  mainForeground: palette.white,
  cardPrimaryBackground: palette.background,
  cardBackground: palette.white,
  headerText: palette.white,
  titleText: palette.black,
  descriptionText: palette.blueGray,
  primaryButtonColor: palette.bluePrimary,
  primaryButtonTextColor: palette.black,
  transparent: palette.transparent,
  recipeInfoItem: palette.blueLight,
};

const spacing = {
  z: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  mdl: 20,
  lg: 24,
  xl: 28,
  xxl: 32,
  xxxl: 40,
};

const iconsSize = {
  md: 24,
};

const borderRadii = {
  sm: 12,
  md: 16,
  lg: 20,
};

export const theme = {
  colors,
  spacing,
  borderRadii,
  iconsSize,
};

export type Theme = typeof theme;
export default theme;
