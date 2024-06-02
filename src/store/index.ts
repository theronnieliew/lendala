import {configureStore} from '@reduxjs/toolkit';
import pokemonReducer from './reducers/pokemonReducer';
import userReducer from './reducers/userReducer';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    user: userReducer,
  },
});
