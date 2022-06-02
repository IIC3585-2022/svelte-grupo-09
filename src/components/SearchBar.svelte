<script>
import {
  search,
  makeSearch,
  searchVisibility
} from '../store.js';

let searchValue;
search.subscribe(value => {
  searchValue = value;
});

let searchVisibilityValue;
searchVisibility.subscribe(value => {
  searchVisibilityValue = value;
});
</script>

{#if searchVisibilityValue}
<div id="bar" class="search-wrapper input-group mb-3">
    <input
      class="input-search"
      bind:value={searchValue}
      type="text"
      placeholder="Busca un lugar"
    />
    <button
      class="btn btn-outline-secondary"
      type="submit"
      on:click={() => makeSearch(searchValue)}
    >
      Buscar
    </button>
</div>
{/if}

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
