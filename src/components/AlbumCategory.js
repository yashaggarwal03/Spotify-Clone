import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Album from './Album';

const AlbumCategory = props => {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.albumTitle}>{props.category}</Text>
      <FlatList
        data={props.albums}
        renderItem={({item}) => (
          <Album
            albumImage={item.image}
            title={item.title}
            artist={item.artist}
          />
        )}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: hp(1),
    marginBottom: hp(1.5)
  },
  albumTitle: {
    color: '#fff',
    fontSize: hp(3),
    fontWeight: 'bold',
    marginLeft: wp(2),
  },
});

export default AlbumCategory;
