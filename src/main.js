import App from './App.svelte';

const process = __myapp;
export const apiKey = process.env.WEATHER_API_KEY
console.log(apiKey);

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;