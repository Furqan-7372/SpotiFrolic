import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

interface SignUpScreenProps {
  // Define any additional props if needed
}

const SignUpScreen: React.FC<SignUpScreenProps> = () => {
  const navigation = useNavigation<any>(); // Adjust the type if you have specific navigation types
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };

  const handleSignIn = () => {
    // Navigate to the Login screen
    navigation.navigate('Login');
  };

  const toggleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Image source={require('../../../Assets/Images/SpotifyLogo/SpotifyWrittenLogo.png')} style={styles.logo} />
        <Text style={styles.infoText}>Enjoy Listening To Music</Text>
        
        <TextInput
          placeholder="Email"
          placeholderTextColor="#aaa"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
        />
        <TextInput
          placeholder="Re-enter Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          style={styles.input}
        />

        <View style={styles.rememberMeContainer}>
          <TouchableOpacity onPress={toggleRememberMe} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonText}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInText}>Already have an account? <Text style={styles.signInLink}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
