import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { theme } from '../../styles/theme';
import { styles } from './LoadingIndicator.styles';

export const LoadingIndicator: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.tertiary} />
    </View>
  );
};
