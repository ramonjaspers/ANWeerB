import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
  subtitle: {
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    marginBottom: theme.spacing.md,
  },
});
