import { Coordinates } from './coordinates';

/**
 * Types for OpenWeatherMap Current Weather Data Response
 * @see https://openweathermap.org/current?collection=current_forecast&collection=current_forecast#parameter
 */

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface WeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface WeatherWind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface WeatherRain {
  '1h'?: number;
}

export interface WeatherSnow {
  '1h'?: number;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherSys {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

/**
 * Interface representing the "current" block mapped to match One Call API style
 * (the only data we really need)
 */
export interface ProcessedWeatherData {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  weather: WeatherCondition[];
}

export interface WeatherApiResponse {
  coord: Coordinates;
  weather: WeatherCondition[];
  base: string;
  main: WeatherMain;
  visibility: number;
  wind: WeatherWind;
  rain?: WeatherRain;
  snow?: WeatherSnow;
  clouds: WeatherClouds;
  dt: number;
  sys: WeatherSys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ProcessedWeatherResponse extends WeatherApiResponse {
  current: ProcessedWeatherData;
}
