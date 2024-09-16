import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  ActivityIndicator,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import {sections} from '../../Utils/data';
import Colors from '../../Utils/color';
import getRandomVibrantColor from '../../Components/RandomColors';
import {useSpotifyApi} from '../../Apis/index';
import {Category} from '../../Interfaces';
import {FlatList} from 'react-native';

const SearchScreen: React.FC = () => {
  const {getCategories} = useSpotifyApi();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const ApiCallHandler = async () => {
    try {
      const categoriesData = await getCategories();
      setCategories(categoriesData.categories.items);
    } catch (err) {
      console.error(err);
      setError('Error fetching categories');
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

  // Render function for section items
  const renderItem = ({item}: {item: Category}) => (
    <View
      style={[
        styles.itemContainer,
        {backgroundColor: getRandomVibrantColor()},
      ]}>
      {/* {item.icons[0] && (
        <Image source={{uri: item.icons[0].url}} style={styles.icon} />
      )} */}
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  // Render function for section headers
  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => <Text style={styles.sectionHeader}>{title}</Text>;

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.heading}>Search</Text>

      {/* Search Bar */}
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

      {/* SectionList */}
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        numColumns={2}
      />
      {/* <SectionList
        contentContainerStyle={styles.contentContainer}
        sections={sections}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default SearchScreen;
