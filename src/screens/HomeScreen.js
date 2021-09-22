import React from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import Data from '../models/Data';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({item}) => (
          <AlbumCategory
            navigation={navigation}
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
