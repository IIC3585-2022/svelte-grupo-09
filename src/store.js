import { writable, derived } from 'svelte/store';
import { getWeatherFromCity, getForecastFromCity } from './scripts/weather';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/

export const count = writable(0);
export const search = writable("");
export const weather = writable({});
export const searchVisibility = writable(true);
export const weatherSet = writable(false);
export const forecastSet = writable(false);
export const forecast = writable([]);
export const forecastButtonVisibility = writable(false);

// Mutations
export const changeSearch = (value) => {
  search.set(value);
};

export const changeWeather = (value) => {
  weather.set(value);
  console.log(value);
  weatherSet.set(true);
};

export const hideSearchBar = () => {
  searchVisibility.set(false);
};
export const hideForecastButton = ()=>{
  forecastButtonVisibility.set(false)

};
export const showForecastButton = () =>{
  forecastButtonVisibility.set(true);
};

export const showSearchBar = () => {
  searchVisibility.set(true);
};

export const unsetWeather = () => {
  weatherSet.set(false);
  weather.set({});
};

export const unsetForecast = ()=> {
  forecast.set([]);
  forecastSet.set(false);
}

export const restoreSearch = () => {
  search.set("");
};

export const changeForecast = (value) => {
  forecast.set(value);
  console.log(value);
  forecastSet.set(true);
}


// Actions
export const makeSearch = async (value) => {
  const weatherData = await getWeatherFromCity(value);
  if (!weatherData) return null;
  changeSearch(value);
  hideSearchBar();
  changeWeather(weatherData);
  showForecastButton();
};

export const goHome = () => {
  unsetWeather();
  restoreSearch();
  showSearchBar();
  hideForecastButton();
  unsetForecast();
};

export const getForecast = async ()=>{
  let city;
  search.subscribe((value)=>{
    city =value;
  })
  const forecastData = await getForecastFromCity(city);
  if (!forecastData) return null;
  changeForecast(forecastData);
  hideForecastButton();
}
