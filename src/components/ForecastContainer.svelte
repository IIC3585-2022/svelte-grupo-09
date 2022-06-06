<script>
import {
  forecastSet,
  forecast
} from '../store.js';
import Hoverable from './Hoverable.svelte';
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
{#if day.dt_txt.includes("12:00:00")}
<Hoverable let:hovering={active}>

<div class="forecast-item" class:active>
<ForecastCard date={day.dt_txt} 
temp_min={day.main.temp_min} 
temp_max={day.main.temp_max} 
weather={day.weather[0].description}/>
</div>
</Hoverable>
{/if}
{/each}
</div>
{/if}

<style>
#forecast-container{
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    width: 100vw;
    
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
    width: 100%;
    padding: 3px
}
.active{
    background-color: #eee;
}
</style>
