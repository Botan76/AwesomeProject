import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeDetailScreen = ({ route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  title: {
    fontSize: 30,
    color: 'white',
  },
});

export default RecipeDetailScreen;
