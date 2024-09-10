import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SignUpScreenProps {
  navigation: any;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Sign Up Screen</Text>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
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

export default SignUpScreen;
