import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BlogContext } from '../navigation/context/BlogContext';

const ShowScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(BlogContext);

  // Find the blog post with the matching id
  const blogPost = state.find(post => post.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.label}>Food & Drink:</Text>
      <Text style={styles.text}>{blogPost.fooddrink}</Text>
      <Text style={styles.label}>Attractions:</Text>
      <Text style={styles.text}>{blogPost.attractions}</Text>
      <Text style={styles.label}>Accommodations:</Text>
      <Text style={styles.text}>{blogPost.accommodations}</Text>
      <Text style={styles.label}>Notes:</Text>
      <Text style={styles.text}>{blogPost.notes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ShowScreen;