import { StackNavigationProp } from '@react-navigation/stack';

// Define the types for your screens
type RootStackParamList = {
  WelcomeScreen: undefined; // or add params if needed
  LoginScreen: undefined;   // or add params if needed
};

// Navigation prop types for each screen
export type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'WelcomeScreen'>;
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

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
