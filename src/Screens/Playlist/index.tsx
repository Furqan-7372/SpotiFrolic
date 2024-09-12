import React, {useState} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign'; // For AntDesign icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';
import Colors from '../../Utils/color';

// Dummy data for the song list
const songs = [
  {
    id: '1',
    title: 'Alone',
    artist: 'Alan Walker',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '2',
    title: 'Let me love you',
    artist: 'Justin Bieber feat DJ Snake',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '3',
    title: 'Ignite',
    artist: 'Alan Walker',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '4',
    title: 'Taki Taki',
    artist: 'DJ Snake feat Selena Gomez',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '11',
    title: 'Alone',
    artist: 'Alan Walker',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '12',
    title: 'Let me love you',
    artist: 'Justin Bieber feat DJ Snake',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '13',
    title: 'Ignite',
    artist: 'Alan Walker',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
  {
    id: '14',
    title: 'Taki Taki',
    artist: 'DJ Snake feat Selena Gomez',
    image: require('../../Assets/Images/SingerImages/rdj.jpg'),
  },
];

const PlaylistScreen = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    navigation.navigate('Music');
  };

  const handleNavigation = (screen: string) => {
    navigation.navigate('Music');
  };

  const renderItem = ({
    item,
  }: {
    item: {id: string; title: string; artist: string; image: any};
  }) => (
    <Pressable
      style={styles.songItem}
      onPress={() => handleNavigation('SongDetails')}
      android_ripple={{color: 'rgba(255, 255, 255, 0.2)'}}>
      <Image source={item.image} style={styles.songImage} />
      <View style={styles.songDetails}>
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </View>
      <AntDesign name="right" size={24} color="white" />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.backArrow}>
          <AntDesign name="left" size={24} color="white" />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../Assets/Images/SingerImages/rdj.jpg')}
            style={styles.image}
          />
        </View>
      </View>
      <Text style={styles.description}>
        Tune in to Top Tracks from Imagine Dragons, Alan Walker and many more
      </Text>
      <View style={styles.spotifyContainer}>
        <Image
          source={require('../../Assets/Images/SpotifyLogo/SpotifyWrittenLogo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>191,165 likes . 3h 45min</Text>
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
              onPress={handlePlayPause}>
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
        data={songs}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.songList}
      />
    </View>
  );
};

export default PlaylistScreen;
