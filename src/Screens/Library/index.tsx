import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LibraryScreenProps {
  navigation: any;
}

const LibraryScreen: React.FC<LibraryScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Library Screen</Text>
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

export default LibraryScreen;
