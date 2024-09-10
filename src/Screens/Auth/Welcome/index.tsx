import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {IWelcomeScreen} from '../../../Interfaces';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import {Image} from 'react-native';
import Colors from '../../../Utils/color';


const WelcomeScreen: React.FC<IWelcomeScreen> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.titleImage}
        source={require('../../../Assets/Images/SpotifyLogo/SpotifyLogo.png')}
        resizeMode="contain"
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Millions of songs</Text>
        <Text style={styles.title}>Free on Spotify.</Text>
      </View>
      <Pressable
        style={({pressed}) => [styles.signupButton, pressed && styles.pressed]}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Sign up free</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [styles.phoneButton, pressed && styles.pressed]}
        onPress={() => console.log('Phone pressed')}>
        <View style={styles.iconContainer}>
          <Ionicons name="phone-portrait-outline" size={35} color={Colors.primary0} />
        </View>
        <Text style={styles.phoneText}>Continue with phone number</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [styles.googleButton, pressed && styles.pressed]}
        onPress={() => console.log('Google pressed')}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.googleImage}
            source={require('../../../Assets/Images/SocialLogo/GoogleIcon.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.googleText}>Continue with Google</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [styles.facebookButton, pressed && styles.pressed]}
        onPress={() => console.log('Facebook pressed')}>
        <View style={styles.iconContainer}>
          <Image
            style={styles.facebookImage}
            source={require('../../../Assets/Images/SocialLogo/FacebookIcon.png')}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.facebookText}>Continue with Facebook</Text>
      </Pressable>
      <Pressable
        style={({pressed}) => [styles.loginButton, pressed && styles.pressed]}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Log in</Text>
      </Pressable>
    </View>
  );
};

export default WelcomeScreen;
