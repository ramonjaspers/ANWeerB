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
import { styles } from './base.style';
import { theme } from '../../styles/theme';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import { LinearGradient } from 'expo-linear-gradient';

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
  } = useWeatherData(coordinates ?? null);

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

    if (locationError) {
      const isPermissionError =
        locationError?.message === 'Location permission denied';
      return (
        <View style={styles.textContainer}>
          <Text style={styles.title}>📍 Location Required</Text>
          <Text style={styles.errorText}>
            {isPermissionError
              ? 'Location permission is required to show the weather for your location.\n Please enable it in the system settings.'
              : // This scenario happens on emulators
                "Error \nFailed to get your current location.\n\nMake sure: \n- GPS is enabled\n- You are connected to the internet\n- You don't use an emulator ;)"}
          </Text>
          {isPermissionError && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openSettings()}
            >
              <Text style={styles.text}>Open Settings</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }

    if (weatherError) {
      return (
        <View style={styles.textContainer}>
          <Text style={styles.title}>⚠️ Something went wrong</Text>
          <Text style={styles.errorText}>Failed to load weather data.</Text>
        </View>
      );
    }

    if (weatherData) {
      return (
        <WeatherCard
          weather={weatherData.current}
          locationName={displayLocationName}
        />
      );
    }

    return null;
  };

  return (
    <LinearGradient
      colors={[
        theme.colors.secondary,
        theme.colors.primary,
        theme.colors.tertiary,
      ]}
      locations={[0.3, 0.7, 0.7]}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor={theme.colors.tertiary}
            colors={[theme.colors.tertiary]}
          />
        }
      >
        {renderContent()}
      </ScrollView>
    </LinearGradient>
  );
}
