 // src/Components/Navigation.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../Redux/Slices/AuthSlice';
import AuthStackScreen from '../AuthStack/index';
import MainAppTabs from '../MainAppStack/index';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <MainAppTabs /> : <AuthStackScreen />}
    </NavigationContainer>
  );
};

export default Navigation;
