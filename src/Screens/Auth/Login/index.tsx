 import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
    </View>
  );
};

export default LoginScreen;
