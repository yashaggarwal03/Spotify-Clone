import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import SongList from '../components/SongList';

import SongsData from '../models/AlbumData';

const AlbumScreen = ({route}) => {
  console.log(route.params);
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={SongsData[0].image} />
      </View>
      <Text style={{color: '#fff'}}>Hello Album Screen</Text>
      <SongList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {   
    alignItems: 'center',
    height:hp(40),
    width: wp(50),
    backgroundColor:'red'
  },
  imageStyle: {
    resizeMode: 'contain',
    height: hp(40),
    width: wp(50)
  },
});

export default AlbumScreen;
