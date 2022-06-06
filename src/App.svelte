<script>
  import HomeButton from './components/HomeButton.svelte';
	import MainTitle from './components/MainTitle.svelte';
	import SearchBar from './components/SearchBar.svelte';
  import ContainerWeather from "./components/ContainerWeather.svelte"
  import ForecastButton from "./components/ForecastButton.svelte";
  import ForecastContainer from "./components/ForecastContainer.svelte"
</script>

<main>
  <MainTitle/>
  <SearchBar/>
  <ContainerWeather/>
  <ForecastButton/>
  <ForecastContainer/>
  <HomeButton/>
</main>




