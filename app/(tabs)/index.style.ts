import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  // wrappers
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xl,
  },

  // content specific style
  errorContainer: {
    alignSelf: 'center',
    backgroundColor: theme.colors.transparentBackground,
    borderRadius: theme.borderRadius.lg,
    maxWidth: '90%',
    padding: theme.spacing.xl,
  },
  errorTitle: {
    fontSize: theme.fontSize.xxl,
    fontWeight: 'bold',
    color: theme.colors.grey.light,
    width: '100%',
  },
  errorText: {
    fontSize: theme.fontSize.lg,
    color: theme.colors.red,
    lineHeight: theme.spacing.lg,
    marginBottom: theme.spacing.lg,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    fontWeight: '600',
  },
});
