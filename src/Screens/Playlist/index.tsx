import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import {View, Text, Image, ScrollView, Pressable, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import Colors from '../../Utils/color';
import Share from 'react-native-share';
import {fetchAlbum} from '../../Apis/index';
import {TouchableOpacity} from 'react-native';

const PlaylistScreen = ({route}) => {
  const {albumName, artists, albumId} = route.params;
  const navigation = useNavigation();
  const [albums, setAlbums] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [url, setUrl] = useState('');
  const [headerTitle, setHeaderTitle] = useState(''); // Initialize header title as empty
  const scrollY = useRef(new Animated.Value(0)).current;

  const shareButtonHandler = () => {
    const options = {
      title: 'Sharing Song',
      message: 'Check out this song',
      url: url,
    };
    Share.open(options)
      .then(res => console.log(res))
      .catch(err => err && console.log(err));
  };

  const handlePlayPause = (trackId, name) => {
    setIsPlaying(!isPlaying);
    navigation.navigate('Music', {trackId, name});
  };

  const handleNavigation = (trackId, name) => {
    navigation.navigate('Music', {trackId, name});
  };

  const artistHandler = item =>
    item.artists.map(artist => artist.name).join(', ');

  const renderItem = item => (
    <Pressable
      key={item.id} // Added key prop
      style={styles.songItem}
      onPress={() => handleNavigation(item.id, item.name)}
      android_ripple={{color: 'rgba(255, 255, 255, 0.2)'}}>
      <Image
        source={require('../../Assets/Images/SingerImages/rdj.jpg')}
        style={styles.songImage}
      />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.name}</Text>
        <Text style={styles.songTitle}>{artistHandler(item)}</Text>
      </View>
      <AntDesign name="right" size={24} color="white" />
    </Pressable>
  );

  const timeCalculator = albums => {
    const totalDuration =
      albums?.reduce((total, item) => total + item.duration_ms, 0) || 0;
    setHours(Math.floor((totalDuration / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((totalDuration / (1000 * 60)) % 60));
  };

  const imageHeight = scrollY.interpolate({
    inputRange: [0, 300], // Adjust these values based on your needs
    outputRange: [300, 150], // Start and end heights
    extrapolate: 'clamp', // Prevents going beyond defined range
  });

  const imageWidth = scrollY.interpolate({
    inputRange: [0, 300],
    outputRange: [350, 200], // Start and end widths
    extrapolate: 'clamp',
  });

  const scale = scrollY.interpolate({
    inputRange: [0, 250], // Adjust these values based on your needs
    outputRange: [1, 0], // scale from 1 to 0.8 as you scroll
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 200], // Adjust this range based on how far you want to scroll before it becomes fully transparent
    outputRange: [1, 0], // Start with full opacity and reduce to 0
    extrapolate: 'clamp', // Prevents going beyond defined range
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [290, 300], // Adjust these values as needed
    outputRange: [0, 1], // Start fully transparent, end fully opaque
    extrapolate: 'clamp',
  });

  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [270, 275], // Adjust these values as needed
    outputRange: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)'], // Start transparent, end opaque
    extrapolate: 'clamp',
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <View style={{flexDirection: 'row', paddingVertical: 10, }}>
          <TouchableOpacity
            style={{padding: 16, backgroundColor: headerBackgroundColor}}
            onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={24} color="white" />
          </TouchableOpacity>
          <Animated.View
            style={{
              opacity: headerOpacity,
              backgroundColor: headerBackgroundColor,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 25,
                paddingVertical: 10,
              }}>
              {headerTitle}
            </Text>
          </Animated.View>
        </View>
      ),
      headerStyle: {backgroundColor: headerBackgroundColor},
      headerTintColor: 'white',
      headerShown: true, // Ensure the header is shown
    });

    const fetchData = async () => {
      try {
        const response = await fetchAlbum(albumId);
        setAlbums(response?.tracks?.items);
        setUrl(response?.external_urls?.spotify);
        timeCalculator(response?.tracks?.items);
      } catch (error) {
        console.error('Error fetching album data:', error);
      }
    };

    fetchData();
  }, [navigation, headerTitle, albumId]); // Include albumId to refetch data when it changes

  useEffect(() => {
    const listenerId = scrollY.addListener(({value}) => {
      if (value > 0 && headerTitle !== albumName) {
        // Change threshold as needed
        setHeaderTitle(albumName);
      } else if (value <= 0 && headerTitle !== '') {
        setHeaderTitle('');
      }
    });

    return () => {
      scrollY.removeListener(listenerId);
    };
  }, [scrollY, headerTitle, albumName]);

  const renderAlbumItems = () => {
    return albums.map(item => renderItem(item));
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
      }}>
      <View style={styles.imageContainer}>
        <Animated.Image
          source={require('../../Assets/Images/SingerImages/rdj.jpg')}
          style={[
            styles.image,
            {
              height: imageHeight,
              width: imageWidth,
              transform: [{scale}],
              opacity: imageOpacity,
            },
          ]}
        />
      </View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false}, // Set to true for better performance, but some styles may not work
        )}
        scrollEventThrottle={16}
        style={styles.container}>
        <Text style={styles.description}>{albumName}</Text>
        <Text style={styles.description}>{artists}</Text>
        <View style={styles.spotifyContainer}>
          <Image
            source={require('../../Assets/Images/SpotifyLogo/SpotifyWrittenLogo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.likesContainer}>
          <Text style={styles.likesText}>
            Total Duration: {hours}h {mins}min
          </Text>
          <View style={styles.optionsContainer}>
            <Pressable
              style={styles.favouriteButton}
              android_ripple={{color: Colors.primary0 + '80'}}
              onPress={() => console.log('Favorite pressed')}>
              <Ionicons
                name="heart-outline"
                color={Colors.primary0}
                size={40}
              />
            </Pressable>
            <Pressable
              style={styles.moreButton}
              android_ripple={{color: Colors.primary0 + '80'}}
              onPress={shareButtonHandler}>
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
                  handlePlayPause(albums[0]?.id, albums[0]?.name);
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
        <View style={styles.songList}>{renderAlbumItems()}</View>
      </Animated.ScrollView>
    </View>
  );
};

export default PlaylistScreen;
