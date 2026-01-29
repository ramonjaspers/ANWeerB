import React from 'react';
import { View, Text, Image, useWindowDimensions } from 'react-native';
import type { CurrenWeather } from '../../types/weatherResponse';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import { getWindDirection } from '../../utils/getWindDirection';
import { styles } from './WeatherCard.styles';
import DetailItem from '../Detailitem/DetailItem';

interface WeatherCardProps {
  weather: CurrenWeather;
  locationName: string;
}

const MainInfo = ({
  locationName,
  weather,
  icon,
}: {
  locationName: string;
  weather: CurrenWeather;
  icon: string;
}) => {
  const description = weather.weather[0].description;
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={styles.location}>{locationName}</Text>
      <View style={styles.mainContent}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{Math.round(weather.temp)}°C</Text>
          <Text style={styles.feelsLike}>
            Feels like {Math.round(weather.feels_like)}°C
          </Text>
        </View>
      </View>
      <Text style={styles.description}>
        {description.charAt(0).toUpperCase() + description.slice(1)}
      </Text>
    </View>
  );
};

export const WeatherCard: React.FC<WeatherCardProps> = ({
  weather,
  locationName,
}) => {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const weatherCondition = weather.weather[0];
  const weatherIcon = getWeatherIcon(weatherCondition.icon);
  const windSpeed = `${Math.round(weather.wind_speed * 3.6)} km/h`;
  const windDir = getWindDirection(weather.wind_deg);
  const humidity = `${weather.humidity}%`;
  const visibility = `${(weather.visibility / 1000).toFixed(1)} km`;

  if (isLandscape) {
    return (
      <View style={[styles.card, styles.landscapeContainer]}>
        <View style={{ flex: 1 }}>
          <MainInfo
            locationName={locationName}
            weather={weather}
            icon={weatherIcon}
          />
        </View>
        <View style={styles.verticalDivider} />
        <View style={styles.detailsWrapper}>
          <DetailItem label='Wind' value={windSpeed} subValue={windDir} />
          <View style={styles.dividerHorizontal} />
          <DetailItem label='Humidity' value={humidity} />
          <View style={styles.dividerHorizontal} />
          <DetailItem label='Visibility' value={visibility} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.card}>
      <MainInfo
        locationName={locationName}
        weather={weather}
        icon={weatherIcon}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <DetailItem label='Wind' value={windSpeed} subValue={windDir} />
          <View style={styles.divider} />
          <DetailItem label='Humidity' value={humidity} />
          <View style={styles.divider} />
          <DetailItem label='Visibility' value={visibility} />
        </View>
      </View>
    </View>
  );
};
