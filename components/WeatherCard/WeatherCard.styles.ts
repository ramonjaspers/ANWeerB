import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: theme.spacing.md,
    margin: theme.spacing.md,
    maxWidth: '90%',
    padding: theme.spacing.lg,
  },
  landscapeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    maxWidth: '95%',
  },
  location: {
    color: theme.colors.white,
    fontSize: theme.fontSize.lg,
    fontWeight: '600',
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  mainContent: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  icon: {
    height: 100,
    marginRight: theme.spacing.md,
    width: 100,
  },
  temperatureContainer: {
    alignItems: 'flex-start',
  },
  temperature: {
    color: theme.colors.white,
    fontSize: theme.fontSize.xxxl,
    fontWeight: 'bold',
  },
  feelsLike: {
    color: theme.colors.grey.light,
    fontSize: theme.fontSize.sm,
    marginTop: theme.spacing.xs,
  },
  description: {
    color: theme.colors.white,
    fontSize: theme.fontSize.lg,
    fontWeight: '500',
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  detailsContainer: {
    borderTopColor: theme.colors.transparentBackground,
    borderTopWidth: 1,
    paddingTop: theme.spacing.md,
    width: '100%',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  divider: {
    backgroundColor: theme.colors.transparentBackground,
    width: 1,
  },
  dividerHorizontal: {
    backgroundColor: theme.colors.transparentBackground,
    height: 1,
    width: '100%',
  },
  verticalDivider: {
    backgroundColor: theme.colors.transparentBackground,
    height: '80%',
    marginHorizontal: theme.spacing.lg,
    width: 1,
  },
  detailsWrapper: {
    flex: 1,
    gap: theme.spacing.md,
  },
});
