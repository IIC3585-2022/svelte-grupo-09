<script>
import {
  weatherSet,
} from '../store.js';
import WeatherCard from './WeatherCard.svelte'
import CoordsCard from './CoordsCard.svelte'
import TempCard from './TempCard.svelte';
import WindCard from './WindCard.svelte';
let weatherSetValue;
weatherSet.subscribe((value) => {
  weatherSetValue = value;
});
</script>
{#if weatherSetValue}
<div id="container">
<div class= "one"> 
<CoordsCard/>
</div>
<div class= "two"> 
<TempCard/>
</div>
<div class= "three"> 
<WindCard/>
</div>
<div class= "four"> 
<WeatherCard/>
</div>
</div>
{/if}

<style>
#container{
    display: grid;
    grid-gap: 10px;
}
.one{
    grid-column: 1;
    grid-row:1;
}
.two{
    grid-column: 1;
    grid-row:2;
}
.three{
    grid-column: 2;
    grid-row:1;
}
.three{
    grid-column: 2;
    grid-row:2;
}
</style>

