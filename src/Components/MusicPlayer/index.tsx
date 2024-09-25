import Slider from '@react-native-community/slider';
import React, {useState, useEffect} from 'react';
import {View, Text, Alert, TouchableOpacity, StyleSheet} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MusicPlayer = ({url}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const playMusic = async () => {
    try {
      await SoundPlayer.playUrl(url);
      setIsPlaying(true);
      getDuration();
      startTimer();
    } catch (e) {
      console.log('Error playing sound', e);
    }
  };

  const pauseMusic = () => {
    SoundPlayer.pause();
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (!url) {
      Alert.alert('Song Not Available', 'This song is not available on free Version', [
        {text: 'OK'},
      ]);
    } else {
      if (isPlaying) {
        pauseMusic();
      } else {
        playMusic();
      }
    }
  };

  const startTimer = () => {
    const interval = setInterval(async () => {
      const info = await SoundPlayer.getInfo();
      setCurrentTime(info.currentTime);
    }, 1000);

    return () => clearInterval(interval);
  };

  const getDuration = async () => {
    const info = await SoundPlayer.getInfo();
    setDuration(info.duration);
  };

  useEffect(() => {
    
      getDuration();
      setCurrentTime(0); // Reset current time when URL changes
    
  }, []);

  useEffect(() => {
    return () => {
      SoundPlayer.stop(); // Stop when component unmounts
    };
  }, []);

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  

  return (
    <View style={styles.container}>
      <View>
        <Slider
          style={{width: 350, height: 40, alignSelf: 'center'}}
          minimumValue={0}
          maximumValue={duration}
          value={currentTime}
          onValueChange={value => {
            SoundPlayer.seek(value);
            setCurrentTime(value);
          }}
          minimumTrackTintColor="#FFFFFF"
          thumbTintColor="white"
          maximumTrackTintColor="#000000ff"
        />
        <View style={styles.sliderContainer}>
          <Text style={styles.time}>{formatTime(currentTime)}</Text>
          <Text style={styles.time}>{formatTime(duration)}</Text>
        </View>
      </View>
      <View style={styles.audioControls}>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="random" size={30} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="step-backward" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={togglePlayPause}
          style={styles.controlButton}>
          <FontAwesome5
            name={isPlaying ? 'pause-circle' : 'play-circle'}
            size={80}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="step-forward" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <FontAwesome5 name="redo-alt" size={30} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  time: {
    color: 'white',
    fontSize: 14,
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
  },
});

export default MusicPlayer;
