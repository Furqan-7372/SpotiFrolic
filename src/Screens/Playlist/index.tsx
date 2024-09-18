import React, {useEffect, useState} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // For AntDesign icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import Colors from '../../Utils/color';
import {useSpotifyApi} from '../../Apis';

const PlaylistScreen = ({route}) => {
  const {albumName, artists, albumId} = route.params;
  const navigation = useNavigation();
  const [albums, setAlbums] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeDuration, setTimeDuration] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const {getAlbumTracksData} = useSpotifyApi();

  const handlePlayPause = (trackId: string, name: string) => {
    setIsPlaying(!isPlaying);
    navigation.navigate('Music', {trackId, name});
  };

  const handleNavigation = (trackId: string, name: string) => {
    navigation.navigate('Music', {trackId, name});
  };

  function artistHandler(item) {
    return item.artists.map(artist => artist.name).join(', ');
  }

  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; artist: string; image: any};
  }) => (
    <Pressable
      style={styles.songItem}
      onPress={() => handleNavigation(item?.id, item?.name)}
      android_ripple={{color: 'rgba(255, 255, 255, 0.2)'}}>
      <Image
        source={require('../../Assets/Images/SingerImages/rdj.jpg')}
        style={styles.songImage}
      />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item?.name}</Text>
        <Text style={styles.songTitle}>{artistHandler(item)}</Text>
      </View>
      <AntDesign name="right" size={24} color="white" />
    </Pressable>
  );

  const albumDataHandler = async () => {
    const response = await getAlbumTracksData(albumId);
    setAlbums(response?.data?.items);
  };
  const timeCalculator = () => {
    const totalDuration =
      albums?.reduce((total, item) => {
        return total + item.duration_ms; // Accumulate duration
      }, 0) || 0; // Default to 0 if albums is undefined or empty

    setHours(Math.floor((totalDuration / (1000 * 60 * 60)) % 24))
    setMins(Math.floor((totalDuration / (1000 * 60)) % 60));
  
  };

  useEffect(() => {
    albumDataHandler();
    timeCalculator();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable
          style={styles.backArrow}
          android_ripple={{color: Colors.primary0 + '80'}}
          onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="white" />
        </Pressable>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Assets/Images/SingerImages/rdj.jpg')}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.description}>{albumName}</Text>
      <Text style={styles.description}>{artists}</Text>
      <View style={styles.spotifyContainer}>
        <Image
          source={require('../../Assets/Images/SpotifyLogo/SpotifyWrittenLogo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>Total Duration: {hours}h {mins}min</Text>
        <View style={styles.optionsContainer}>
          <Pressable
            style={styles.favouriteButton}
            android_ripple={{color: Colors.primary0 + '80'}}
            onPress={() => console.log('Favorite pressed')}>
            <Ionicons name="heart-outline" color={Colors.primary0} size={40} />
          </Pressable>
          <Pressable
            style={styles.moreButton}
            android_ripple={{color: Colors.primary0 + '80'}}
            onPress={() => console.log('More options pressed')}>
            <Ionicons
              name="ellipsis-vertical-outline"
              color={Colors.primary0}
              size={30}
            />
          </Pressable>
          <View style={styles.playButton}>
            <Pressable
              style={styles.playButton}
              android_ripple={{color: Colors.primary800 + '80'}}
              onPress={() => {
                handlePlayPause(albums?.items[0].id, albums?.items[0].name);
              }}>
              <Ionicons
                name={isPlaying ? 'pause-circle' : 'play-circle'}
                color={Colors.primary800}
                size={90}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <FlatList
        data={albums}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.songList}
      />
    </View>
  );
};

export default PlaylistScreen;
