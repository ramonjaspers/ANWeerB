import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import type { LocationApiResponse } from '../../types/locationResponse';
import { useLocationSearch } from '../../hooks/useLocationSearch';
import { useSearchHistoryStore } from '../../stores/useSearchHistoryStore';
import { theme } from '../../styles/theme';
import { styles } from './SearchBar.styles';

interface SearchBarProps {
  onLocationSelect: (location: LocationApiResponse) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onLocationSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const { data: searchResults, isLoading } = useLocationSearch(searchQuery);
  const { history, addToHistory, clearHistory } = useSearchHistoryStore();

  const handleLocationSelect = (location: LocationApiResponse) => {
    onLocationSelect(location);
    addToHistory(location);
    setSearchQuery('');
    setShowResults(false);
    setIsFocused(false);
    Keyboard.dismiss();
  };

  const showHistory =
    isFocused && searchQuery.length === 0 && history.length > 0;
  const showSearchResults = showResults && searchQuery.length >= 2;

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          placeholder='Search for a location...'
          placeholderTextColor={theme.colors.grey.light}
          value={searchQuery}
          onChangeText={(text) => {
            setSearchQuery(text);
            setShowResults(text.length >= 2);
          }}
          onFocus={() => {
            setIsFocused(true);
            setShowResults(searchQuery.length >= 2);
          }}
          onBlur={() => {
            // Delay to allow touch on results
            setTimeout(() => setIsFocused(false), 500);
          }}
        />
      </View>

      {showHistory && (
        <View style={styles.resultsContainer}>
          <View style={styles.historyHeader}>
            <Text style={styles.historyTitle}>Recent Searches</Text>
            <TouchableOpacity onPress={clearHistory}>
              <Text style={styles.clearButton}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View>
            {history.map((item, index) => (
              <TouchableOpacity
                key={`${item.lat}-${item.lon}-${index}`}
                style={styles.resultItem}
                onPress={() => handleLocationSelect(item)}
              >
                <Text style={styles.historyIcon}>🕒</Text>
                <Text style={styles.resultText}>
                  {item.name}
                  {item.state ? `, ${item.state}` : ''}, {item.country}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      {showSearchResults && searchResults && searchResults.length > 0 && (
        <View style={styles.resultsContainer}>
          {searchResults.map((item, index) => (
            <TouchableOpacity
              key={`${item.lat}-${item.lon}-${index}`}
              style={styles.resultItem}
              onPress={() => handleLocationSelect(item)}
            >
              <Text style={styles.locationIcon}>📍</Text>
              <Text style={styles.resultText}>
                {item.name}
                {item.state ? `, ${item.state}` : ''}, {item.country}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {showSearchResults && isLoading && (
        <View style={styles.resultsContainer}>
          <Text style={styles.loadingText}>Searching...</Text>
        </View>
      )}
    </View>
  );
};
