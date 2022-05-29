<script>
import {apiData} from '../scripts/store.js'
import {getWeatherFromCity } from '../scripts/weather.js'
let place="";
function makeSearch(){
    console.log("hola");
    getWeatherFromCity(place).then(response=>response.json()).then(data=>{
        apiData.set(data);
        console.log(data);
    })
    

    
}
</script>
<div id="bar" class="search-wrapper input-group mb-3">
    <input class="input-search" bind:value={place} type="text" placeholder="Busca un lugar"/>
    <button class="btn btn-outline-secondary" on:click={makeSearch}>Buscar</button>
</div>



<style>
#bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 40vw;
  height: 10vh;
  padding: 15px;
  border-radius: 0.5rem;
  align-self: center;
  grid-column: span 2;
  margin: 15px;
  margin: auto;

}
.input-search {
  width: 75%;
  height: 100%;
  font-size: 1.5rem;
  padding: 10px;
}
button {
  width: 25%;
  height: 100%;
  font-size: 1.5rem;
}
</style>
