// src/Components/AuthStackScreen.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../Screens/Auth/Welcome';
import SignUpScreen from '../../Screens/Auth/Signup';
import LoginScreen from '../../Screens/Auth/Login';

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
