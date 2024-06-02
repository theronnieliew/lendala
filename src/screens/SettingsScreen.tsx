import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import {Color} from '../utils/color';

export const SettingsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.header}>Settings</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Account</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Privacy</Text>
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingText}>Notifications</Text>
        </View>
        <View style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  settingItem: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: Color.BACKGROUND,
  },
  settingText: {
    fontSize: 16,
  },
  logoutButton: {
    paddingVertical: 15,
    backgroundColor: Color.SELECTED,
    borderRadius: 15,
    marginTop: 10,
  },
  logoutText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
});
