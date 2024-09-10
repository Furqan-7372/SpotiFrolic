import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SearchScreenProps {
  navigation: any;
}

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
      <Text onPress={() => navigation.navigate('Home')}>Back to Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
