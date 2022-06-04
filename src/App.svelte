<script>
  import CoordsCard from './components/CoordsCard.svelte';
  import HomeButton from './components/HomeButton.svelte';
	import MainTitle from './components/MainTitle.svelte';
	import SearchBar from './components/SearchBar.svelte';
  import TempCard from './components/TempCard.svelte';
  import WeatherCard from './components/WeatherCard.svelte';
  import WindCard from './components/WindCard.svelte';
</script>

<main>
  <MainTitle/>
  <SearchBar/>
  <WeatherCard/>
  <TempCard/>
  <CoordsCard/>
  <WindCard/>
  <HomeButton/>
</main>
