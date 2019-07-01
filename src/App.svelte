<script>
	import Grid from './Grid.svelte';
	export let name;
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!</h1>
<Grid size={4}></Grid>
