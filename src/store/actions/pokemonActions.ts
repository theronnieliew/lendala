import {createAsyncThunk} from '@reduxjs/toolkit';
import {pokemonApi} from '../../api/index';

export const fetchPokemonData = createAsyncThunk(
  'pokemon/fetchPokemonData',
  async () => {
    return await pokemonApi.fetchPokemonData();
  },
);
export const fetchNextPokemonData = createAsyncThunk(
  'pokemon/fetchNextPokemonData',
  async (nextPageUrl, {rejectWithValue}) => {
    try {
      const data = await pokemonApi.fetchNextPokemon(nextPageUrl);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchPokemonDetails',
  async (url, {rejectWithValue}) => {
    try {
      const data = await pokemonApi.fetchPokemonDetails(url);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
