import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import Colors from '../../Utils/color';
import getRandomVibrantColor from '../../Components/RandomColors';
import { useSpotifyApi } from '../../Apis/index';
import { Category } from '../../Interfaces';

const SearchScreen: React.FC = () => {
  const { getCategories, getGenres } = useSpotifyApi();
  const [categories, setCategories] = useState<Category[]>([]);
  const [genres, setGenres] = useState<string[]>([]); // Assume genres is an array of strings
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const ApiCallHandler = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData.categories.items);

      const genresData = await getGenres(); // Assuming this fetches genres
      console.log(genresData)
      setGenres(genresData);
    } catch (err) {
      console.error(err);
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    ApiCallHandler();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({ item }: { item: Category | string }) => (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: getRandomVibrantColor() },
      ]}>
      <Text style={styles.itemText}>{typeof item === 'string' ? item : item.name}</Text>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  const sections = [
    { title: 'Genres', data: genres },
    { title: 'Categories', data: categories },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Search</Text>

      <View style={styles.searchContainer}>
        <Icon
          name="search"
          size={20}
          color={Colors.primary0}
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor={Colors.primary0}
        />
      </View>

      <SectionList
        sections={sections}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item.id || index.toString()}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default SearchScreen;
