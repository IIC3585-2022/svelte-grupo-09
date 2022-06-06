<script>
import {
  forecastSet,
  forecast
} from '../store.js';
import ForecastCard from './ForecastCard.svelte';
let forecastSetValue;
forecastSet.subscribe((value) => {
  forecastSetValue = value;
});

let forecastValue;
forecast.subscribe((value) => {
  forecastValue = value;
});
</script>

{#if forecastSetValue}
<div id="forecast-container">
<div class="title-forecast">
<h3>Pronóstico para los próximos 5 días</h3>
</div>

{#each forecastValue.list as day}
<div class="forecast-item">
<ForecastCard date={day.dt_txt} 
temp_min={day.main.temp_min} 
temp_max={day.main.temp_max} 
weather={day.weather[0].description}/>
</div>
{/each}
</div>
{/if}

<style>
#forecast-container{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100%
    
}
.title-forecast {
  justify-content: center;
  text-align: center;
  color: black;
  font-size: medium;
  font-weight: light;
}
.forecast-item{
    justify-content: center;
    width: 600px;
    padding: 3px
}
</style>
