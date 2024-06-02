const BASE_URL = 'https://pokeapi.co/api/v2';

export class PokemonAPI {
  fetchPokemonData = async () => {
    const response = await fetch(`${BASE_URL}/pokemon`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon data');
    }
    return response.json();
  };

  fetchNextPokemon = async (nextPageUrl: string) => {
    const response = await fetch(nextPageUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch next page of Pokemon data');
    }
    return response.json();
  };

  fetchPokemonDetails = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon details');
    }
    return response.json();
  };
}
