import { LocationApiResponse } from '../types/locationResponse';

/**
 * https://openweathermap.org/api/geocoding-api?collection=other&collection=other#direct
 */
export const fetchLocationsByName = async (
  query: string,
): Promise<LocationApiResponse[]> => {
  const url = `${process.env.EXPO_PUBLIC_GEO_URL}/direct?q=${encodeURIComponent(
    query,
  )}&limit=5&appid=${process.env.EXPO_PUBLIC_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Geocoding API error: ${response.statusText}`);
  }

  return response.json();
};
