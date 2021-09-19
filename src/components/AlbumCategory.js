import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import { widthPercentageToDP as wp ,heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Album from './Album';
import Data from '../models/Data';
const AlbumCategory = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.albumTitle}>Popular albums</Text>
      <FlatList
        data={Data}
        renderItem={itemData => <Album albumImage={itemData.item.image} title={itemData.item.title} artist={itemData.item.artist} /> }
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        padding: hp(1)
    },
    albumTitle:{
        color:'#fff',
        fontSize: hp(3),
        fontWeight: 'bold',
        marginLeft: wp(3)
    }
});

export default AlbumCategory;
