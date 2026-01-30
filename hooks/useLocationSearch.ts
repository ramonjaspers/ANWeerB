import { useQuery } from '@tanstack/react-query';
import { fetchLocationsByName } from '../services/geoApi';

export const useLocationSearch = (query: string) => {
  console.log('query', query);
  return useQuery({
    queryKey: ['location-search', query],
    queryFn: () => fetchLocationsByName(query),
    enabled: query.trim().length > 2, // only search with more than 2 characters
    staleTime: 60 * 60 * 1000, // Cache can be kept for an hour to minimze same requests
  });
};
