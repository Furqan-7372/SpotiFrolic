import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ITile} from '../../Interfaces/index';
import styles from './style';

const Tile: React.FC<ITile> = ({
  title,
  description,
  imageUrl,
  onPress,
  containerStyle,
}) => {
  function descriptionHandler() {
    if (description) {
      return <Text style={styles.description}>{description}</Text>;
    }
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {descriptionHandler()}
      </View>
    </TouchableOpacity>
  );
};

export default Tile;
