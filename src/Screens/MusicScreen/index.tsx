import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/color';

const MusicScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <FontAwesome5 name="chevron-down" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          PLAYING FROM SEARCH{'\n'}
          <Text style={styles.headerSubText}>"stay" in Songs</Text>
        </Text>
        <TouchableOpacity style={styles.optionsButton}>
          <FontAwesome5 name="ellipsis-v" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.musicInfo}>
        <Image
          source={{uri: 'https://i.ytimg.com/vi/p4OtWN4k1Og/maxresdefault.jpg'}}
          style={styles.albumCover}
        />
      </View>
      <View style={styles.musicDetails}>
        <View>
          <Text style={styles.musicDetailsText}>STAY (with Justin Bieber)</Text>
          <Text style={styles.musicDetailsText}>
            The Kid LAROI, Justin Bieber
          </Text>
        </View>
        <View>
          <Pressable
            // style={styles.favouriteButton}
            android_ripple={{color: Colors.primary0 + '80'}}
            onPress={() => console.log('Favorite pressed')}>
            <Ionicons name="heart-outline" color={Colors.primary0} size={40} />
          </Pressable>
        </View>
      </View>
      <View>
        <Slider
            style={{width: 350, height: 40, alignSelf: 'center'}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            thumbTintColor="white"
            maximumTrackTintColor="#000000ff"
          />
          <View style={styles.sliderContainer} >
        <Text style={styles.time}>1:23</Text>
        <Text style={styles.time}>3:36</Text>
          </View>
      </View>
      <View style={styles.audioControls}>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="random" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="step-backward" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="pause-circle" size={80} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="step-forward" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="redo-alt" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.extraControls}>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="desktop" size={20} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="share-alt" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.lyricsButton}>
        <Text style={styles.buttonText}>Lyrics</Text>
        <FontAwesome5 name="angle-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MusicScreen;
