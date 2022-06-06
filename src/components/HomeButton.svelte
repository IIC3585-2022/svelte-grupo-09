<script>
import {
  weatherSet,
  goHome,
} from '../store.js';

let weatherSetValue;
weatherSet.subscribe((value) => {
  weatherSetValue = value;
});

let src = 'assets/previous.png';
</script>

{#if weatherSetValue}
<div>
  <button
    title="Volver a la barra de búsqueda"
    on:click={() => goHome()}
    class="home-button"
  >
    <img class="image" alt="img" src={src} />
  </button>
</div>
{/if}

<style>
.home-button {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 10px;
  left:10px;
  display: inline-block;
  overflow: hidden;
  margin: 0;
  background-color: inherit;
  padding: 0;
  border: none;
  background: none;
}

.image {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 75%;
  width: 75%;
  transform: translate(-50%, -50%);
}
</style>
