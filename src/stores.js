import { writable, derived } from 'svelte/store';
import { createTiles, canMove, swap } from './tiles';

export const image = writable('assets/monks.jpg');

export const length = writable(4);

export const tilesCount = derived(length, $length => $length ** 2);

export const blankIndex = derived([length, image], 
  ([$length]) => Math.floor(Math.random() * $length ** 2));

export const tiles = derived(length, createTiles);

// export const tiles = derived([length, blankIndex], ([$length, $blankIndex]) => {
//   const $tiles = createTiles($length);
//   const $blankTile = $tiles[$blankIndex];

//   const { subscribe, set } = writable($tiles);
//   return $tiles
// 	// return {
// 	// 	subscribe,
// 	// 	move: (targetTile) => {
//   //     if(canMove(targetTile, $blankTile)) {
//   //       set(swap($tiles, targetTile, $blankTile))
//   //     };
//   //   }
// 	// };
// });