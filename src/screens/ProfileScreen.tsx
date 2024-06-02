import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {fetchUserData} from '../store/actions/userActions';

import {Color} from '../utils/color';

export const ProfileScreen = () => {
  const dispatch = useDispatch();
  const {user, loading, error} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Color.SELECTED} />
        </View>
      ) : user ? (
        <>
          <Text style={styles.title}>User Details</Text>
          <Text style={styles.text}>Name: {user.name}</Text>
          <Text style={styles.text}>Username: {user.username}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Phone: {user.phone}</Text>
          <Text style={styles.text}>Website: {user.website}</Text>
        </>
      ) : (
        <View style={styles.container}>
          <Text>No user data available</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});
