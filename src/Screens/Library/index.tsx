import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For FontAwesome icons
import AntDesign from 'react-native-vector-icons/AntDesign'; // For AntDesign icons


const Home = () => {
  const navigation = useNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNavigation = (screen: string) => {
    // navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="white" />
        <Text style={styles.headerText}>Home</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../Assets/Images/SingerImages/rdj.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.description}>
        Tune in to Top Tracks from Imagine Dragons, Alan
        Walker and many more
      </Text>
      <View style={styles.spotifyContainer}>
        {/* <FontAwesome5 name="spotify" size={24} color="green" /> */}
        <Text style={styles.spotifyText}>Spotify</Text>
      </View>
      <View style={styles.likesContainer}>
        <Text style={styles.likesText}>191,165 likes . 3h 45min</Text>
      </View>
      <TouchableOpacity
        style={styles.playButton}
        onPress={handlePlayPause}
      >
        {isPlaying ? (
          <AntDesign name="pausecircle" size={48} color="white" />
        ) : (
          <AntDesign name="playcircle" size={48} color="white" />
        )}
      </TouchableOpacity>
      <ScrollView style={styles.songList}>
        <TouchableOpacity
          style={styles.songItem}
          onPress={() => handleNavigation('SongDetails')}
        >
          <Image
            source={require('../../Assets/Images/SingerImages/rdj.jpg')}
            style={styles.songImage}
          />
          <View style={styles.songDetails}>
            <Text style={styles.songTitle}>Alone</Text>
            <Text style={styles.songArtist}>Alan Walker</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.songItem}
          onPress={() => handleNavigation('SongDetails')}
        >
          <Image
            source={require('../../Assets/Images/SingerImages/rdj.jpg')}
            style={styles.songImage}
          />
          <View style={styles.songDetails}>
            <Text style={styles.songTitle}>Let me love you</Text>
            <Text style={styles.songArtist}>Justin Bieber feat DJ Snake</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.songItem}
          onPress={() => handleNavigation('SongDetails')}
        >
          <Image
            source={require('../../Assets/Images/SingerImages/rdj.jpg')}
            style={styles.songImage}
          />
          <View style={styles.songDetails}>
            <Text style={styles.songTitle}>Ignite</Text>
            <Text style={styles.songArtist}>Alan Walker</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.songItem}
          onPress={() => handleNavigation('SongDetails')}
        >
          <Image
            source={require('../../Assets/Images/SingerImages/rdj.jpg')}
            style={styles.songImage}
          />
          <View style={styles.songDetails}>
            <Text style={styles.songTitle}>Taki Taki</Text>
            <Text style={styles.songArtist}>DJ Snake feat Selena Gomez</Text>
          </View>
          <AntDesign name="right" size={24} color="white" />
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => handleNavigation('Home')}>
          <AntDesign name="home" size={24} color="white" />
          <Text style={styles.footerButtonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handleNavigation('Search')}>
          <AntDesign name="search1" size={24} color="white" />
          <Text style={styles.footerButtonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handleNavigation('Library')}>
          <AntDesign name="file1" size={24} color="white" />
          <Text style={styles.footerButtonText}>Your Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => handleNavigation('Premium')}>
          <AntDesign name="premium" size={24} color="white" />
          <Text style={styles.footerButtonText}>Premium</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191414',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 10,
  },
  description: {
    padding: 16,
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  spotifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  spotifyText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 8,
    fontWeight: 'bold',
  },
  likesContainer: {
    alignItems: 'center',
    marginTop: 8,
  },
  likesText: {
    color: 'white',
    fontSize: 14,
  },
  playButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  songList: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songDetails: {
    marginLeft: 16,
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 14,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#282828',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  }
});

export default Home;
