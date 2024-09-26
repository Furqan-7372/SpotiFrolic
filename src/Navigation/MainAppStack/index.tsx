// src/Components/MainAppTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeStackHandler from '../HomeStack/index';
import SearchScreen from '../../Screens/Search';
import LibraryScreen from '../../Screens/Library';

const BottomTabs = createBottomTabNavigator();

const MainAppTabs = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#00000069',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      }}>
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeStackHandler}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => <Ionicons name="search" color={color} size={size} />,
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({ color, size }) => <Ionicons name="folder-open-outline" color={color} size={size} />,
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default MainAppTabs;
