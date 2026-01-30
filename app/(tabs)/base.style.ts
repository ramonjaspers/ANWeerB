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
  textContainer: {
    alignSelf: 'center',
    backgroundColor: theme.colors.transparentBackground,
    borderRadius: theme.borderRadius.lg,
    maxWidth: '90%',
    padding: theme.spacing.xl,
  },
  title: {
    fontSize: theme.fontSize.xl,
    fontWeight: 'bold',
    color: theme.colors.grey.light,
    alignSelf: 'center',
    width: '100%',
  },
  errorText: {
    color: theme.colors.red,
    fontSize: theme.fontSize.lg,
    marginVertical: theme.spacing.md,
  },
  text: {
    color: theme.colors.white,
    fontSize: theme.fontSize.md,
    marginVertical: theme.spacing.md,
  },
  button: {
    backgroundColor: theme.colors.primary,
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignSelf: 'center',
  },
});
