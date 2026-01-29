import { useQuery } from '@tanstack/react-query';
import type { Coordinates } from '../types/coordinates';

import * as Location from 'expo-location';

/**
 * Fetches the current location of the user leveraging expo-location
 */
export const useCurrentLocation = () => {
  return useQuery({
    queryKey: ['current-location'],
    queryFn: async (): Promise<Coordinates> => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        throw new Error('Location permission denied');
      }

      const location = await Location.getCurrentPositionAsync({});
      return {
        lat: location.coords.latitude,
        lon: location.coords.longitude,
      };
    },
    staleTime: 10 * 60 * 1000, // Location is fresh for 10 minutes
    gcTime: 30 * 60 * 1000, // Cache for 30 minutes
    retry: false, // Don't retry if permission is denied
  });
};
