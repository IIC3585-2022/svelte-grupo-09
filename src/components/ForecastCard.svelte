<script>
import {
  forecastSet,
} from '../store.js';
let forecastSetValue;
forecastSet.subscribe((value) => {
  forecastSetValue = value;
});
export let date;
export let temp_min;
export let temp_max;
export let weather;
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(2);
temp_min = kelvinToCelsius(temp_min);
temp_max = kelvinToCelsius(temp_max);
let d = new Date(date);

const obtainDate = ()=>{
  return `${days[d.getDay()]}, ${months[d.getMonth()]} ${d.getDate()}`
}

</script>

{#if forecastSetValue}
<div id="forecast-card">
   <div class= "forecast-info">
        <div class= "date"><p>{obtainDate()}</p></div>
        <div class= "temp"><p>{temp_min}ºC/{temp_max}ºC</p></div>
        <div class= "weather"><p>{weather}</p></div>
    </div>
</div>

{/if}

<style>

.forecast-info{
  
  display: grid;

  width: 80vw;

}
.date{
  grid-column: 1;
  grid-row:1;
  text-align: center;
}
.temp{
  grid-column: 2;
  grid-row:1;
  text-align: center;

}
.weather{
  grid-column: 3;
  grid-row:1;


}
.weather > p{
  position: relative;
  text-align: right
}

</style>