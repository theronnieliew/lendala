import {createSelector} from '@reduxjs/toolkit';

export const selectPokemonList = createSelector(
  state => state.pokemon.pokemonList,
  pokemonList => pokemonList,
);

export const userProfile = createSelector(
  state => state.user.user,
  user => user,
);
