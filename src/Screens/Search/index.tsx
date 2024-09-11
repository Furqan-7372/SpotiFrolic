import React from 'react';
import { View, Text, TextInput, SectionList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';
import { sections } from '../../Utils/data';
import Colors from '../../Utils/color';

const vibrantColors = [
  '#1E90FF', 
  '#FF6347', 
  '#32CD32', 
  '#FF00FF', 
  '#40E0D0', 
  '#FF4500', 
  '#FFFF00', 
  '#FF00FF', 
  '#DC143C', 
  '#1E90FF'  
];

// Function to get a random vibrant color
const getRandomVibrantColor = () => {
  const randomIndex = Math.floor(Math.random() * vibrantColors.length);
  return vibrantColors[randomIndex];
};

const SearchScreen: React.FC = () => {
    // Render function for section items
    const renderItem = ({ item }: { item: { id: string, name: string } }) => (
      <View style={[styles.itemContainer, { backgroundColor: getRandomVibrantColor() }]}>
            <Text style={styles.itemText}>{item.name}</Text>
        </View>
    );

    // Render function for section headers
    const renderSectionHeader = ({ section: { title } }: { section: { title: string } }) => (
        <Text style={styles.sectionHeader}>{title}</Text>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <Text style={styles.heading}>Search</Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
                <Icon name="search" size={20} color={Colors.primary0} style={styles.searchIcon} />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor={Colors.primary0}
                />
            </View>

            {/* SectionList */}
            <SectionList
                contentContainerStyle={styles.contentContainer}
                sections={sections}
                renderSectionHeader={renderSectionHeader}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default SearchScreen;
