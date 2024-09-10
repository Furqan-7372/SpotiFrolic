import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface WelcomeScreenProps {
  navigation: any;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Text onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
      <Text onPress={() => navigation.navigate('Login')}>Log In</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
