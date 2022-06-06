<script>
import {
  weather,
  weatherSet,
} from '../store.js';

let weatherTempValue;
weather.subscribe((value) => {
  weatherTempValue = value.main;
});

let weatherSetValue;
weatherSet.subscribe((value) => {
  weatherSetValue = value;
});

let src = 'assets/temperature.png';

const getTempInfo = () => {
  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);
  return `Temp: ${kelvinToCelsius(weatherTempValue.temp)}°C\n
          Feels Like: ${kelvinToCelsius(weatherTempValue.feels_like)}°C\n
          Max Temp: ${kelvinToCelsius(weatherTempValue.temp_max)}°C\n 
          Min Temp: ${kelvinToCelsius(weatherTempValue.temp_min)}°C\n
          Humidity: ${weatherTempValue.humidity} \n
          Pressure: ${weatherTempValue.pressure}`;
};
</script>

{#if weatherSetValue}
<div class="temp-card">
  <div class="temp-icon">
    <img alt="Temp" src={src} />
  </div>
  <div class="temp-info">
    <p>{ getTempInfo() }</p>
  </div>
</div>
{/if}

<style>
.temp-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: hsl(0, 0%, 96%);
  font-size: auto;
  color: black;
  margin: 5px;
  height: 150px;
}
.temp-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
  