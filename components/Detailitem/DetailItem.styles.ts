import { theme } from '../../styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  detailItem: {
    alignItems: 'center',
    flex: 1,
  },
  detailLabel: {
    color: theme.colors.grey.light,
    fontSize: theme.fontSize.xs,
    marginBottom: theme.spacing.xs,
  },
  detailValue: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: '600',
  },
  detailSubValue: {
    color: theme.colors.white,
    fontSize: theme.fontSize.sm,
    marginTop: 2,
    opacity: 0.8,
  },
});
