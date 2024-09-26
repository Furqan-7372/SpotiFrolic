// src/Components/HomeStackHandler.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/Home';
import PlaylistScreen from '../../Screens/Playlist/index';
import MusicScreen from '../../Screens/MusicScreen';
import { TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const HomeStack = createStackNavigator();

const HomeStackHandler = () => {
  return (
    <HomeStack.Navigator screenOptions={{ presentation: 'modal' }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <HomeStack.Screen
        name="Playlist"
        component={PlaylistScreen}
        options={{
          headerShown: true,
          headerStyle: { backgroundColor: 'transparent' },
          headerTintColor: 'white',
          headerTitle: '',
          headerTransparent: true,
        }}
      />
      <HomeStack.Screen
        name="Music"
        component={MusicScreen}
        options={({ navigation }) => ({
          presentation: 'modal',
          headerShown: true,
          headerStyle: { backgroundColor: 'transparent', height: 100 },
          headerTintColor: 'white',
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity style={{ padding: 25 }} onPress={() => navigation.goBack()}>
              <FontAwesome5 name="chevron-down" size={25} color="white" />
            </TouchableOpacity>
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackHandler;
