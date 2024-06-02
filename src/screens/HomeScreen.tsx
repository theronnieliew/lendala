import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  fetchPokemonData,
  fetchNextPokemonData,
} from '../store/actions/pokemonActions';
import {Pokemon} from '../store/reducers/pokemonReducer';

import {Color} from '../utils/color';
import {ListItem} from '../components';

export const HomeScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState<Pokemon[]>([]);
  const {pokemonList, nextUrl, loading} = useSelector(state => state.pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonData());
  }, []);

  useEffect(() => {
    if (pokemonList) {
      const temp = pokemonList.filter(
        item =>
          item.name &&
          item.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredData(temp);
    }
  }, [pokemonList, searchQuery]);

  const fetchNextPage = () => {
    if (nextUrl) {
      dispatch(fetchNextPokemonData(nextUrl));
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {loading && !nextUrl ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator
              size="large"
              color={Color.SELECTED}
              testID="loading-indicator"
            />
          </View>
        ) : (
          <FlatList
            data={filteredData}
            keyExtractor={item => item.url}
            renderItem={({item}) => (
              <ListItem
                name={item.name}
                onPress={() => navigation.navigate('Details', {url: item.url})}
              />
            )}
            onEndReached={fetchNextPage}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Color.BACKGROUND,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
