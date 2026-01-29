import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useWeatherData } from '../../hooks/useWeatherData';

const queryClient = new QueryClient();

function WeatherDisplay() {
  const { data, isLoading, error, isError } = useWeatherData({
    lat: 52.3676,
    lon: 4.9041,
  });

  useEffect(() => {
    console.log('Query Status:', {
      isLoading,
      isError,
      error: error?.message,
      hasData: !!data,
    });
    if (data) {
      console.log(JSON.stringify(data, null, 2));
    }
  }, [data, isLoading, isError, error]);

  return (
    <View style={styles.container}>
      <View>
        {data ? <Text>we got data wohoo</Text> : <Text>nothing here?</Text>}
      </View>
    </View>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherDisplay />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
