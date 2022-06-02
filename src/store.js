import { writable, derived } from 'svelte/store';
import { getWeatherFromCity } from './scripts/weather';

/** Store for your data. 
This assumes the data you're pulling back will be an array.
If it's going to be an object, default this to an empty object.
**/
export const apiData = writable([]);
export const count = writable(0);
export const search = writable("");
export const weather = writable({});
export const searchVisibility = writable(true);
export const weatherSet = writable(false);

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

export const showSearchBar = () => {
  searchVisibility.set(true);
};

export const unsetWeather = () => {
  weatherSet.set(false);
  weather.set({});
};

export const restoreSearch = () => {
  search.set("");
};


// Actions
export const makeSearch = async (value) => {
  const weatherData = await getWeatherFromCity(value);
  if (!weatherData) return null;
  changeSearch(value);
  hideSearchBar();
  changeWeather(weatherData);
};

export const goHome = () => {
  unsetWeather();
  restoreSearch();
  showSearchBar();
};
