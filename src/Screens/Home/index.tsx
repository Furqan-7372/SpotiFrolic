import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../Interfaces/index'; // Import your types
import styles from './style'; // Import your styles
import Icon from 'react-native-vector-icons/FontAwesome5';
import Tile from '../../Components/Tile';
import {fetchAlbumTracks, fetchTracks, fetchRecommendations} from '../../Apis/index';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Home'
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  

  const albumDataHandler = async () => {
    const response = await fetchAlbumTracks();
    setAlbums(response?.albums?.items || []); // Fallback to empty array
  };
  const trackDataHandler = async () => {
    const response = await fetchTracks('7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B');
    setTracks(response?.tracks);
  };
  const recommendationDataHandler = async () => {
    const response = await fetchRecommendations();
    setRecommendations(response?.tracks);
  };
  function artistHandler(item: { artists: { name: string }[] }) {
    return item.artists.map(artist => artist.name).join(', ');
  }

  
  useEffect(() => {
    albumDataHandler();
    trackDataHandler();
    recommendationDataHandler();
  }, []);

  const imageUrlIs =
    'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg';

  const onPressHandler = item => {
    navigation.navigate('Playlist', {
      albumName: item.name,
      artists: item.artists.map(artist => artist.name).join(', '),
      albumId: item.id,
    });
  };
  const handleMusicNavigation = (trackId: string, name: string) => {
    navigation.navigate('Music', {trackId, name});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Made for you</Text>
        <View style={styles.headerIcons}>
          <Icon name="bell" size={20} color="#fff" />
          <Icon name="history" size={20} color="#fff" />
          <Icon name="cog" size={20} color="#fff" />
        </View>
      </View>

      {/* Large Tiles */}
      <View style={styles.tileContainer}>
        {/* Trending Now */}
        <FlatList
          data={albums}
          renderItem={({item}) => (
            <View>
              <Tile
                onPress={() => onPressHandler(item)}
                title={item.name}
                description={artistHandler(item)}
                imageUrl={imageUrlIs}
              />
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false} // Optional: hides horizontal scroll indicator
        />
      </View>
      {/* Trending Now */}
      <Text style={styles.heading}>Trending now</Text>
      <FlatList
        data={tracks}
        renderItem={({item}) => (
          <View>
            <Tile
              onPress={()=>handleMusicNavigation(item.id, item.name)}
              title={item.name}
              description={artistHandler(item)}
              imageUrl={imageUrlIs}
            />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false} // Optional: hides horizontal scroll indicator
      />

      {/* Top Picks for You */}
      <Text style={styles.heading}>Top picks for you</Text>
      <FlatList
        data={recommendations}
        renderItem={({item}) => (
          <View>
            <Tile
              onPress={()=>handleMusicNavigation(item.id, item.name)}
              title={item.name}
              description={artistHandler(item)}
              imageUrl={imageUrlIs}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false} // Optional: hides horizontal scroll indicator
      />
    </ScrollView>
  );
};

export default HomeScreen;
