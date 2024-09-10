import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ILoginScreen} from '../../../Interfaces/index';
import styles from './style';
import Colors from '../../../Utils/color';

const LoginScreen: React.FC<ILoginScreen> = () => {
  const navigation = useNavigation<any>(); // Adjust the type if you have specific navigation types

  const handleLogin = () => {
    // Navigate to the Home screen
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    // Navigate to the SignUp screen
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../Assets/Images/SpotifyLogo/SpotifyWrittenLogo.png')}
        style={styles.logo}
      />
      <Text style={styles.infoText}>Please enter your login details</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor={Colors.primary50}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={Colors.primary50}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.subContainer} >
        <View style={styles.rememberContainer} >
          <Text style={styles.rememberText} >Remember Me</Text>
        </View>
        <View style={styles.forgotContainer} >
          <Text style={styles.forgotText} >Forgot Password?</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.cancelButton]}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUpText}>
          Don't have an account? <Text style={styles.signUpLink}>SignUp</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
