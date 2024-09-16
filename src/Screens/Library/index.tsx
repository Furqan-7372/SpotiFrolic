// CategoriesScreen.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {useSpotifyApi} from '../../Apis/index';
import {Category} from '../../Interfaces';

const CategoriesScreen: React.FC = () => {
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

  const renderItem = ({item}: {item: Category}) => (
    <View
     style={styles.itemContainer}>
      {item.icons[0] && (
        <Image source={{uri: item.icons[0].url}} style={styles.icon} />
      )}
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 18,
  },
});

export default CategoriesScreen;
