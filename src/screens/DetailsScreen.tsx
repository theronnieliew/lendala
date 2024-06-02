import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {fetchPokemonDetails} from '../store/actions/pokemonActions';

import {Color} from '../utils/color';

export const DetailsScreen = ({route}: any) => {
  const {url} = route.params;
  const dispatch = useDispatch();

  const pokemon = useSelector((state: any) => state.pokemon.selectedPokemon);
  const loading = useSelector((state: any) => state.pokemon.loading);

  useEffect(() => {
    dispatch(fetchPokemonDetails(url));
  }, [url, dispatch]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Color.SELECTED} />
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.container}>
        <Text>Error loading Pokémon details.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Text style={styles.name}>{pokemon.name}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={{uri: pokemon.sprites.front_default}}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Abilities:</Text>
        {pokemon.abilities.map((ability: any) => (
          <Text key={ability.ability.name} style={styles.infoText}>
            {ability.ability.name}
          </Text>
        ))}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Types:</Text>
        {pokemon.types.map((type: any) => (
          <Text key={type.type.name} style={styles.infoText}>
            {type.type.name}
          </Text>
        ))}
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Stats:</Text>
        {pokemon.stats.map((stat: any) => (
          <Text key={stat.stat.name} style={styles.infoText}>
            {stat.stat.name}: {stat.base_stat}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  imageContainer: {
    width: '95%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Color.DEFAULT,
    backgroundColor: Color.BACKGROUND,
  },
  image: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
  },
  infoContainer: {
    width: '95%',
    marginVertical: 5,
    padding: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Color.DEFAULT,
    borderRadius: 10,
    backgroundColor: Color.BACKGROUND,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  infoText: {
    fontSize: 14,
    textTransform: 'capitalize',
  },
});
