import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../Screens/Home';
import SearchScreen from '../../Screens/Search';
import LibraryScreen from '../../Screens/Library';

const MainAppStack = createStackNavigator();

const MainAppStackScreen = () => {
  return (
    <MainAppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainAppStack.Screen name="Home" component={HomeScreen} />
      <MainAppStack.Screen name="Search" component={SearchScreen} />
      <MainAppStack.Screen name="Library" component={LibraryScreen} />
    </MainAppStack.Navigator>
  );
};

export default MainAppStackScreen;
