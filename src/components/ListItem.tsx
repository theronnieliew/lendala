import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

interface ListItemProps {
  name: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const ListItem = ({name, onPress}: ListItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 38,
    borderWidth: 2,
    justifyContent: 'center',
    marginBottom: 5,
  },
  text: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 20,
  },
});
