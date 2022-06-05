<script>
import {
  weather,
  weatherSet,
} from '../store.js';

let weatherWeatherValue;
weather.subscribe((value) => {
  weatherWeatherValue = value.weather;
});

let weatherSetValue;
weatherSet.subscribe((value) => {
  weatherSetValue = value;
});

const getUrl = () => {
  const icon = weatherWeatherValue[0].icon;
  return `http://openweathermap.org/img/wn/${icon}@2x.png`;
};

const getDescription = () => {
  return weatherWeatherValue[0].description;
};
</script>

{#if weatherSetValue}
<div class="weather-card">
  <div class="weather-icon">
    <img alt="weather" src={ getUrl() } />
  </div>
  <div class="weather-info">
    <p>{ getDescription() }</p>
  </div>
</div>
{/if}

<style>
.weather-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: hsla(209, 82%, 52%, 0.63);
  font-size: auto;
  color: white;
  margin: 5px;
}
</style>
