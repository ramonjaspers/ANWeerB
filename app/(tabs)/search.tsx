import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { useLocationSearch } from '../../hooks/useLocationSearch';
import { useWeatherData } from '../../hooks/useWeatherData';

import { styles } from './base.style';

export default function SearchTab() {
  const [searchQuery, setSearchQuery] = useState('');
  const searchHook = useLocationSearch(searchQuery);

  const firstResult = searchHook.data?.[0];
  const coords = firstResult
    ? { lat: firstResult.lat, lon: firstResult.lon }
    : null;
  const weatherHook = useWeatherData(coords);

  useEffect(() => {
    console.log('------------SEARCH RESULT--------------');
    console.log(searchHook.data?.[0]);
  }, [searchHook.data]);

  useEffect(() => {
    console.log('------------WEATHER DATA--------------');
    console.log(weatherHook.data);
  }, [weatherHook.data]);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder='serach'
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
}
