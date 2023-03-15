import { Clouds, Wind, Coord } from './common';

export interface ForecastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: List[];
    city: City;
  }
  
  export interface List {
    dt: number;
    main: ForecastMain;
    weather: ForecastWeather[];
    clouds: Clouds;
    wind: Wind;
    sys: ForecastSys;
    dt_txt: string;
    rain?: Rain;
  }

  export interface ForecastWeather {
    id: number;
    main: string;
    description: string;
    icon: string;
}
  
  export interface ForecastMain {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  }
  
  
  export interface ForecastSys {
    pod: string;
  }
  
  export interface Rain {
    "3h": number;
  }
  
  export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  }