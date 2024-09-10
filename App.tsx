import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WelcomeScreen from './src/Screens/Auth/Welcome';
import SignUpScreen from './src/Screens/Auth/Signup';
import LoginScreen from './src/Screens/Auth/Login';
import HomeScreen from './src/Screens/Home';
import SearchScreen from './src/Screens/Search';
import LibraryScreen from './src/Screens/Library';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Bottom Tabs Stack
const MainApp = createBottomTabNavigator();

// Authentication Stack
const AuthStack = createStackNavigator();

// Main App Stack
const MainAppStack = createStackNavigator();

const dummyState = false;

function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
}

function MainAppStackScreen() {
  return (
    <MainAppStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <MainAppStack.Screen name="Home" component={HomeScreen} />
      <MainAppStack.Screen name="Search" component={SearchScreen} />
      <MainAppStack.Screen name="Library" component={LibraryScreen} />
    </MainAppStack.Navigator>
  );
}

function MainNav() {
  return (
    <MainApp.Navigator>
      <MainApp.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <MainApp.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
      <MainApp.Screen
        name="Library"
        component={LibraryScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="folder-open-outline" color={color} size={size} />
          ),
        }}
      />
    </MainApp.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      {!dummyState && <AuthStackScreen />}
      {dummyState && <MainNav />}
    </NavigationContainer>
  );
}

function Root() {
  return <Navigation />;
}

function App(): React.ReactElement {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'light-content'} />
      <Root />
      {/* 
      <NavigationContainer>
        <BottomTabs.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <BottomTabs.Screen
            name="Auth"
            component={AuthStackScreen}
          />
          <BottomTabs.Screen
            name="MainApp"
            component={MainAppStackScreen}
          />
        </BottomTabs.Navigator>
      </NavigationContainer> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#00000000',
  },
});

export default App;
