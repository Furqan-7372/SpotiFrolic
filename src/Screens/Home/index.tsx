import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text onPress={() => navigation.navigate('Search')}>Go to Search</Text>
      <Text onPress={() => navigation.navigate('Library')}>Go to Library</Text>
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

export default HomeScreen;
