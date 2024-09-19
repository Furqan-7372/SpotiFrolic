import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SectionedScrollView = () => {
  const sections = [
    { title: 'Section 1', content: ['Item 1', 'Item 2', 'Item 3','Item 1', 'Item 2', 'Item 3'] },
    { title: 'Section 2', content: ['Item A', 'Item B', 'Item C'] },
    { title: 'Section 3', content: ['Item X', 'Item Y', 'Item Z'] },
  ];

  return (
    <View style={styles.container}>
      {sections.map((section, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.title}>{section.title}</Text>
          <ScrollView style={styles.scrollView}>
            {section.content.map((item, idx) => (
              <Text key={idx} style={styles.item}>
                {item}
              </Text>
            ))}
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
    maxHeight: 100, // Set a max height for the scrollable area
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SectionedScrollView;
