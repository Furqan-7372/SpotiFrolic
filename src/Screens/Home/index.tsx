import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, ScrollView } from 'react-native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { BottomTabParamList } from '../../Interfaces/index'; // Import your types
import styles from './style'; // Import your styles
import Icon from 'react-native-vector-icons/FontAwesome5';
import {trendingSongs, singers, topPicksSongs} from '../../Utils/data'

type HomeScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>Made for you</Text>
        <View style={styles.headerIcons}>
          <Icon name="bell" size={20} color="#fff" />
          <Icon name="history" size={20} color="#fff" style={styles.iconMargin} />
          <Icon name="cog" size={20} color="#fff" />
        </View>
      </View>

      {/* Large Tiles */}
      <View style={styles.tileContainer}>
        {singers.map(singer => (
          <View key={singer.id} style={styles.tile}>
            <Image source={singer.image} style={styles.tileImage} />
            <Text style={styles.tileText}>{singer.name}</Text>
          </View>
        ))}
      </View>

      {/* Trending Now */}
      <Text style={styles.heading}>Trending now</Text>
      <FlatList
        data={trendingSongs}
        renderItem={({ item }) => (
          <View style={styles.trendingItem}>
            <Image source={item.cover} style={styles.trendingImage} />
            <Text style={styles.trendingText}>{item.name}</Text>
            <Text style={styles.trendingSubText}>{item.singer}</Text>
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
        renderItem={({ item }) => (
          <View style={styles.trendingItem}>
            <Image source={item.cover} style={styles.trendingImage} />
            <Text style={styles.trendingText}>{item.name}</Text>
            <Text style={styles.trendingSubText}>{item.singer}</Text>
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
