import React from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import Data from '../models/Data';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <AlbumCategory
            category={item.category}
            albums={item.albums}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
