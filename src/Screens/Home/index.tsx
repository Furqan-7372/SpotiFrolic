import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {BottomTabParamList} from '../../Interfaces/index'; // Import your types
import styles from './style'; // Import your styles
import Icon from 'react-native-vector-icons/FontAwesome5';
import {trendingSongs, singers, topPicksSongs} from '../../Utils/data';
import Tile from '../../Components/Tile';
import {useSpotifyApi} from '../../Apis/index';
import {AlbumRespone} from '../../Interfaces';
import {HomeScreenData} from '../../Components/HomeScreenData';

type HomeScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  'Home'
>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [albums, setAlbums] = useState<any>()

  
  function dataHandler() {
    setAlbums (HomeScreenData())
    console.log('Hello', albums)
  }

  useEffect(() => {
    dataHandler();
  }, []);

  const imageUrlIs =
    'https://image.tmdb.org/t/p/w500/5qHNjhtjMD4YWH3UP0rm4tKwxCL.jpg';

  function onPressHandler() {
    console.log('Open Playlist');
    navigation.navigate('Playlist');
  }

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
        <Tile
          onPress={onPressHandler}
          title={singers[1].name}
          imageUrl={imageUrlIs}
        />
        <Tile
          onPress={onPressHandler}
          title={singers[0].name}
          imageUrl={imageUrlIs}
        />
      </View>

      {/* Trending Now */}
      <Text style={styles.heading}>Trending now</Text>
      <FlatList
        data={albums}
        renderItem={({item}) => (
          <View>
            <Tile
              onPress={onPressHandler}
              title={item.name}
              description={item.singer}
              imageUrl={imageUrlIs}
            />
          </View>
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false} // Optional: hides horizontal scroll indicator
      />

      {/* Top Picks for You */}
      <Text style={styles.heading}>Top picks for you</Text>
      <FlatList
        data={topPicksSongs}
        renderItem={({item}) => (
          <View>
            <Tile
              onPress={onPressHandler}
              title={item.name}
              description={item.singer}
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
