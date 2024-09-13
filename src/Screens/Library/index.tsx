// CategoriesScreen.tsx

import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {useSpotifyApi} from '../../Apis/index';
import {Category} from '../../Interfaces';

const CategoriesScreen: React.FC = () => {
  const {initialize, getCategories} = useSpotifyApi();
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<any>(null);

  console.log(categories, '==== ', accessToken, 'TOKEN AYA??');

  let token

  const ApiCallHandler = async () => {
    token = await initialize();
    console.log(token, 'token wahan wala');
    loadCategories()
  };

  const loadCategories = useCallback(async () => {
    console.log(token, '===token===', categories, 'categories')
    try {
      const categoriesData = await getCategories(token);
      setCategories(categoriesData.categories.items);
    } catch (err) {
      setError('Error fetching categories');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [getCategories]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        if (accessToken) {
          await loadCategories();
        }
      } catch (err) {
        setError('Error initializing Spotify API');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, [initialize, loadCategories, accessToken]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const renderItem = ({item}: {item: Category}) => (
    <View style={styles.itemContainer}>
      {item.icons[0] && (
        <Image source={{uri: item.icons[0].url}} style={styles.icon} />
      )}
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <View>
      <Pressable onPress={ApiCallHandler}>
        <Text>Mujhe Dabao</Text>
      </Pressable>
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
