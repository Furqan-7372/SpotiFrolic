import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SectionedScrollView = () => {
  const sections = [
    { title: 'Section 1', content: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', ] },
    { title: 'Section 2', content: ['Item A', 'Item B', 'Item C'] },
    { title: 'Section 3', content: ['Item X', 'Item Y', 'Item Z'] },
  ];

  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{section.title}</Text>
          <ScrollView style={styles.scrollView}>
            <View style={styles.grid}>
              {section.content.map((item, idx) => (
                <View key={idx} style={styles.itemContainer}>
                  <Text style={styles.item}>{item}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  section: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    maxHeight: 200, // Adjust this based on your needs
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: '50%', // Adjust to 50% for two items per row
    padding: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
    backgroundColor: 'red',
  },
});

export default SectionedScrollView;
