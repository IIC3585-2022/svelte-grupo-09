<script>
import {
  weather,
  weatherSet,
} from '../store.js';

let weatherWindValue;
weather.subscribe((value) => {
  weatherWindValue = value.wind;
});

let weatherSetValue;
weatherSet.subscribe((value) => {
  weatherSetValue = value;
});

let src = 'assets/wind.png';

const getWind = () => {
  return `Wind speed ${weatherWindValue.speed} m/s  Wind direction ${weatherWindValue.deg}°  Wind gust ${weatherWindValue.gust} m/s`;
};
</script>

{#if weatherSetValue}
<div class="wind-card">
  <div class="wind-icon">
    <img alt="wind" src={src} />
  </div>
  <div class="wind_info">
    <p>{ getWind() }</p>
  </div>
</div>
{/if}

<style>
.wind-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(68, 0, 107);
  font-size: auto;
  color: white;
  margin: 5px;
}
</style>
