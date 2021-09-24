import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Entypo from 'react-native-vector-icons/Entypo';

const SongList = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={props.icon} />
      <View style={styles.textContainer}>
        <Text allowFontScaling={false} style={styles.title}>{props.title}</Text>
        <Text allowFontScaling={false} style={styles.artist}>{props.artist}</Text>
      </View>
      <View style={styles.options}>
        <Entypo name="dots-three-vertical" color="#a6a6a6" size={23} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: hp(1.5),
  },
  textContainer: {
    padding: wp(1.5),
  },
  options: {
    position: 'absolute',
    right: wp(1),
    alignSelf: 'center',
  },
  icon: {
    resizeMode: 'contain',
    height: hp(8),
    width: wp(18),
  },
  title: {
    color: '#fff',
    fontSize: hp(2.4),
  },
  artist: {
    color: '#a6a6a6',
    fontSize: hp(1.8),
  },
});

export default SongList;
