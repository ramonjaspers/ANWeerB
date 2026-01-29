import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  Linking,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { useWeatherData } from '../../hooks/useWeatherData';
import { useCurrentLocation } from '../../hooks/useCurrentLocation';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { styles } from './index.style';
import { theme } from '../../styles/theme';

export default function MyWeatherTab() {
  const [refreshing, setRefreshing] = useState(false);

  const {
    data: coordinates,
    isLoading: isLoadingLocation,
    error: locationError,
    refetch: refetchLocation,
  } = useCurrentLocation();

  const {
    data: weatherData,
    isLoading: isLoadingWeather,
    error: weatherError,
    refetch: refetchWeather,
  } = useWeatherData({ lat: 34.0901, lon: -118.4065 });

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await refetchLocation();
      await Promise.all([refetchWeather()]);
    } finally {
      setRefreshing(false);
    }
  }, [refetchLocation, refetchWeather]);

  const displayLocationName = weatherData?.sys.country
    ? `${weatherData?.sys.country}, ${weatherData?.name}`
    : 'Current Location';

  //! Watch out if using an emulator,
  //! isLoadingLocation will fail with an error since it cant locate the device
  const showLoading = (isLoadingLocation || isLoadingWeather) && !refreshing;

  const renderContent = () => {
    if (showLoading) {
      return <LoadingIndicator />;
    }
    //! location always fails on emulator
    if (locationError && !weatherData) {
      return (
        <View>
          <Text>Location Error</Text>
        </View>
      );
    }

    if (weatherError && !weatherData) {
      return (
        <View>
          <Text>Weather Error</Text>
        </View>
      );
    }
    if (weatherData) {
      return (
        <View>
          <Text>{displayLocationName}</Text>
          <Text>{weatherData.current.temp}</Text>
        </View>
      );
    }

    return null;
  };

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollContent}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={theme.colors.white}
          colors={[theme.colors.white]}
        />
      }
    >
      {renderContent()}
    </ScrollView>
  );
}
