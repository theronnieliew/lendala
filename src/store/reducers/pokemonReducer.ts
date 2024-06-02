import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  fetchPokemonData,
  fetchNextPokemonData,
  fetchPokemonDetails,
} from '../actions/pokemonActions';

export interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemonList: Pokemon[];
  nextUrl: string | null;
  selectedPokemon: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemonList: [],
  nextUrl: null,
  selectedPokemon: null,
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPokemonData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload.results;
        state.nextUrl = action.payload.next;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchNextPokemonData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNextPokemonData.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = [...state.pokemonList, ...action.payload.results];
        state.nextUrl = action.payload.next;
      })
      .addCase(fetchNextPokemonData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchPokemonDetails.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPokemon = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default pokemonSlice.reducer;
