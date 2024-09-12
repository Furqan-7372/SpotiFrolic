import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeScreen from './src/Screens/Auth/Welcome';
import SignUpScreen from './src/Screens/Auth/Signup';
import LoginScreen from './src/Screens/Auth/Login';
import HomeScreen from './src/Screens/Home';
import SearchScreen from './src/Screens/Search';
import LibraryScreen from './src/Screens/Library';
import PlaylistScreen from './src/Screens/Playlist/index';
import MusicScreen from './src/Screens/MusicScreen';

// Bottom Tabs Navigator
const BottomTabs = createBottomTabNavigator();

// Authentication Stack Navigator
const AuthStack = createStackNavigator();

// Playlist Stack Navigator
const HomeStack = createStackNavigator();

const dummyState = true; // Change this to switch between authentication and main app

function AuthStackScreen() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function HomeStackHandler() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Playlist" component={PlaylistScreen} />
      <HomeStack.Screen name="Music" component={MusicScreen} />
    </HomeStack.Navigator>
  );
}

function MainAppTabs() {
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
        name="Home"
        component={HomeStackHandler}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <BottomTabs.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="folder-open-outline" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </BottomTabs.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      {dummyState ? <MainAppTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}

function App(): React.ReactElement {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00000000', // Transparent background
  },
});

export default App;
