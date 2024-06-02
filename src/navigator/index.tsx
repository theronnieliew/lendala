import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import {
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
  DetailsScreen,
} from '../screens';
import {Color} from '../utils/color';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Color.SELECTED,
          tabBarIcon: ({focused}) => (
            <Icon
              name={'home'}
              size={24}
              color={focused ? Color.SELECTED : Color.DEFAULT}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: Color.SELECTED,
          tabBarIcon: ({focused}) => (
            <Icon
              name={'user'}
              size={24}
              color={focused ? Color.SELECTED : Color.DEFAULT}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarActiveTintColor: Color.SELECTED,
          tabBarIcon: ({focused}) => (
            <Icon
              name={'settings'}
              size={24}
              color={focused ? Color.SELECTED : Color.DEFAULT}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="TabNav"
        component={TabNavigator}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTintColor: Color.SELECTED,
        }}
      />
    </Stack.Navigator>
  );
};
