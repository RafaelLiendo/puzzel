<script>
	import { length, tiles, image, blankIndex } from './stores.js';
	
	let blankTile;

	function handleTileClick(e) {
		tiles.move(e.target);
	}
</script>

<style>
	ul {
		--size: 80vmin;
		display: grid;
		padding: 0;
		margin: 0;
		height: var(--size);
		width: var(--size);
	}

	li {
		list-style: none;
	}

	li.image {
		background-image: var(--image);
		background-repeat: no-repeat;
		background-size: var(--size);
		background-position-x: calc((var(--col) - 1) * var(--size) / var(--length) * -1);
		background-position-y: calc((var(--row) - 1) * var(--size) / var(--length) * -1);
	}
</style>

<ul style="--length:{$length}; --image:url('{$image}')">
  {#each $tiles as tile, i}
		{#if i === $blankIndex}
			<li class="blank" 
				style="grid-area:{tile.row} / {tile.col};"
				bind:this="{blankTile}"></li>
		{:else}
			<li class="image"
				style="grid-area:{tile.row} / {tile.col}; --row:{tile.row}; --col:{tile.col}"
				on:click="{handleTileClick}"></li>
		{/if}
	{/each}
</ul>
