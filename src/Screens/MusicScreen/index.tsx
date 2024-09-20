import React, { useEffect, useState } from 'react';
import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../../Utils/color';
import { useSpotifyApi } from '../../Apis';
import SoundPlayer from 'react-native-sound-player';
import MusicPlayer from '../../Components/MusicPlayer';


const MusicScreen = ({route}) => {
  const { trackId, name } = route.params;
  const {getTrackData} = useSpotifyApi()
  const navigation = useNavigation();
  const [track, setTrack] = useState();
  const [mins, setMins] = useState('')
  const [secs, setSecs] = useState('')
  const [url, setUrl] = useState('')



  
  function artistHandler() {
    return track?.artists?.map(artist => artist.name).join(', ');
  }

  const timeHandler = () => {
    const minutes = Math.floor((track?.duration_ms / (1000 * 60)) % 60);
    const seconds = Math.floor((track?.duration_ms / 1000) % 60);
  
    // Format minutes and seconds to always be two digits
    const formattedMins = minutes.toString().padStart(2, '0');
    const formattedSecs = seconds.toString().padStart(2, '0');
  
    setMins(formattedMins); // Set formatted string
    setSecs(formattedSecs); // Set formatted string
  }

  const albumDataHandler = async () => {
    const response = await getTrackData(trackId);
    setUrl(response?.data?.preview_url)
    setTrack(response?.data);
    timeHandler()
  };

  useEffect(() => {
    albumDataHandler();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-down" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.headerContainer} >
          <Text style={styles.headerText}>PLAYING FROM SEARCH</Text>
          <Text style={styles.headerSubText}>"{name}" in Songs</Text>
        </View>
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
          <Text style={styles.musicDetailsText}>{name}</Text>
          <Text style={styles.musicDetailsText}>
            {artistHandler()}
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
      <MusicPlayer url={url}/>
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
