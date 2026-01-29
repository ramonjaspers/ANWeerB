export const theme = {
  colors: {
    primary: '#003d86',
    secondary: '#0096da',
    tertiary: '#ffcd00',
    black: '#000000',
    white: '#ffffff',
    grey: {
      light: '#f5f5f5',
      medium: '#9e9e9e',
      dark: '#424242',
    },
    red: '#c70101ff',
    transparentBackground: 'rgba(255, 255, 255, 0.2)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
    xxxl: 64,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 32,
    xxxl: 48,
    ul: 64,
  },
};

export type Theme = typeof theme;
