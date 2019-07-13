import { writable, derived } from 'svelte/store';
import { createTiles, canMove, swap } from './tiles';

export class Game {
  gameOptions;
  tiles;
  blankTile;
  moves;

  moveTile(tile) {
    if(this.canMoveTile(tile)) {
      swapTile(tile);
    }
  }

  canMoveTile(tile) {
    return canMove(tile, this.blankTile);
  }

  swapTile(tile) {
    return swap(tile, blank)
  }
}

export class GameOptions {
  length;
  image;
}

export const image = writable('assets/monks.jpg');

export const length = writable(4);

export const tilesCount = derived(length, $length => $length ** 2);

export const blankIndex = derived([length, image], 
  ([$length]) => Math.floor(Math.random() * $length ** 2));

export const tiles = derived(length, createTiles);



function createMoves() {
	const { subscribe, set } = writable(0);
  const blanktile = $blankTile.get(); 
	return {
		subscribe,
		move: (targetTile) => {
      if(canMove(targetTile, blankTile)) {
        set(swap(targetTile, blankTile))
      };
    }
	};
}

export const mobes = createCount();
