export const fetchWeatherData = async (coords: {
  lat: number;
  lon: number;
}): Promise<any> => {
  const { lat, lon } = coords;
  const url = `${process.env.EXPO_PUBLIC_BASE_URL}?lat=${lat}&lon=${lon}&appid=${process.env.EXPO_PUBLIC_API_KEY}&units=metric`;

  console.log('URL:', url);

  try {
    const response = await fetch(url);
    console.log('Fetch response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Weather API Error Response:', response.status, errorText);
      throw new Error(
        `Weather API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    // map data we need into new "current" object just like their 3.0 API
    data.current = {
      dt: data.dt,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      clouds: data.clouds?.all || 0,
      visibility: data.visibility,
      wind_speed: data.wind?.speed || 0,
      wind_deg: data.wind?.deg || 0,
      weather: data.weather,
    };

    return data;
  } catch (err) {
    console.error('Fetch failed unexpectedly:', err);
    throw err;
  }
};
