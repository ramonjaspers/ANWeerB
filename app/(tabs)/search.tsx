import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useWeatherData } from '../../hooks/useWeatherData';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { LoadingIndicator } from '../../components/LoadingIndicator/LoadingIndicator';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import { LocationApiResponse } from '../../types/locationResponse';
import { Coordinates } from '../../types/coordinates';
import { theme } from '../../styles/theme';
import { styles } from './base.style';

export default function SearchTab() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [selectedLocationName, setSelectedLocationName] = useState<
    string | null
  >(null);

  const {
    data: weatherData,
    isLoading: isLoadingWeather,
    error,
  } = useWeatherData(coordinates);

  const handleLocationSelect = (location: LocationApiResponse) => {
    setCoordinates({
      lat: location.lat,
      lon: location.lon,
    });
    setSelectedLocationName(
      location.state
        ? `${location.name}, ${location.state}, ${location.country}`
        : `${location.name}, ${location.country}`,
    );
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
      <View style={{ zIndex: 10, elevation: 10 }}>
        <SearchBar onLocationSelect={handleLocationSelect} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps='handled'
      >
        {isLoadingWeather && <LoadingIndicator />}
        {!isLoadingWeather && weatherData && selectedLocationName ? (
          <WeatherCard
            weather={weatherData.current}
            locationName={selectedLocationName}
          />
        ) : (
          !isLoadingWeather && (
            <View style={styles.textContainer}>
              <Text style={styles.title}>
                {error ? '⚠️ Something went wrong' : '🔍 Search'}
              </Text>
              <Text style={error ? styles.errorText : styles.text}>
                {error
                  ? `: ${error.message}\n Something went wrong on our side trying to load the weather.\n Please try again later.`
                  : 'Try searching for a city or a location to see its weather conditions'}
              </Text>
            </View>
          )
        )}
      </ScrollView>
    </LinearGradient>
  );
}
