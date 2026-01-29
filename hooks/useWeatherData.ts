import { useQuery } from '@tanstack/react-query';
import { fetchWeatherData } from '../services/weatherApi';
import type { Coordinates } from '../types/coordinates';

export const useWeatherData = (coords: Coordinates | null) => {
  return useQuery({
    queryKey: ['weather', coords],
    queryFn: () => {
      if (!coords) throw new Error('No coordinates provided');
      return fetchWeatherData(coords);
    },
    enabled: !!coords,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
