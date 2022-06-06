<script>
import{
    forecastButtonVisibility,
    getForecast,
   
} from '../store.js';
let forecastButtonVisibilityValue;
forecastButtonVisibility.subscribe((value) => {
 forecastButtonVisibilityValue = value;
});

</script>

{#if forecastButtonVisibilityValue}
<div id="bar">
<button 
class="forecast"
on:click={() => getForecast()}
>
Pronóstico para los próximos días
</button>
</div>
{/if}

<style>
#bar{
   display: flex;
   align-items: center;
   justify-content: center;
}
.forecast{
  width: 25%;
  height: 50%;
  font-size: 1rem;
  border-radius: 10px;
  margin: 5px;
  background-color: #E6E0DA;
}
</style>