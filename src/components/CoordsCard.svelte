<script>
import {
  weather,
  weatherSet,
} from '../store.js';

let weatherCoordsValue;
weather.subscribe((value) => {
  weatherCoordsValue = value.coord;
});

let weatherSetValue;
weatherSet.subscribe((value) => {
  weatherSetValue = value;
});

let src = 'assets/compass.png';
</script>

{#if weatherSetValue}
<div class="coords-card">
  <div class="coords-icon">
    <img alt="compass" src={src} />
  </div>
  <div class="coords_info">
    <p>{`Lat ${weatherCoordsValue.lat} Lon ${weatherCoordsValue.lon}`}</p>
  </div>
</div>
{/if}

<style>
.coords-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgb(100, 40, 0);
  font-size: auto;
  color: white;
  margin: 5px;
  height: 20vh;
}
.coords-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
img {
  width: 6.5rem;
}
</style>
