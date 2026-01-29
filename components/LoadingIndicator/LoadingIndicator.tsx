import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { theme } from '../../styles/theme';
import { styles } from './LoadingIndicator.styles';

export const LoadingIndicator: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>The data is loading...</Text>
      <Text style={styles.subtitle}>Please wait</Text>
      <ActivityIndicator size='large' color={theme.colors.tertiary} />
    </View>
  );
};
