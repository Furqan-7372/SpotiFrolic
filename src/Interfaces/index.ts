import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { StyleProp, ViewStyle } from 'react-native';

// Define the types for stack navigators
export type RootStackParamList = {
  WelcomeScreen: undefined; // or add params if needed
  LoginScreen: undefined;   // or add params if needed
  Playlist: undefined;      // Ensure Playlist is included if it's part of the stack navigator
  Music: undefined;         // Include Music if it's part of the stack navigator
};

// Define the types for bottom tab navigators
export type BottomTabParamList = {
  Home: undefined;    // No parameters for Home screen
  Search: undefined;  // No parameters for Search screen
  Library: undefined; // No parameters for Library screen
  // Playlist should not be defined here if it's used in the stack navigator
};

// Navigation prop types for each stack screen
export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;
export type PlaylistScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Playlist'>; // Added for Playlist screen
export type MusicScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Music'>; // Added for Music screen

// Navigation prop types for each tab screen
export type HomeScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>;
export type SearchScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Search'>;
export type LibraryScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Library'>;

// Define other types for your application
type TAddress = {
  country: string;
  city: string;
  state: string;
  zip: number;
};

export interface IUser {
  name: string;
  contact: string;
  picture: string;
  address: TAddress;
}

export interface IWelcomeScreen {
  navigation: WelcomeScreenNavigationProp;
}

export interface ILoginScreen {
  navigation: LoginScreenNavigationProp;
}

export interface IRestaurant {
  name: string;
  address: TAddress;
}

export interface IHotel {
  name: string;
  address: TAddress[];
}

export interface ITile {
  title: string;
  description?: string;
  imageUrl?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface IMusicTile {
  title: string;
  description?: string;
  imageUrl?: string;
  onPress: () => void;
  containerStyle?: StyleProp<ViewStyle>;
}
