import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//importing icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const song = {
    id: '3',
    image: require('../assets/chainsmokers.jpg'),
    title: 'The Chainsmokers',
    artist: 'Andrew Taggart, Alex Pall',
};

const PlayerWidget = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={song.image}/>
      <View style={styles.textContainer}>
          <Text style={styles.title}>{song.title}</Text>
          <Text style={styles.artist}>{song.artist}</Text>
      </View>
      <View style={styles.iconContainer}>
      <EvilIcons
          style={{top: hp(0.5), right: wp(3)}}
          name="heart"
          size={hp(5)}
          color="#fff"
        />
      <Foundation
          style={{left: wp(1)}}
          name="pause"
          size={hp(5)}
          color="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        flexDirection: 'row',
        padding: hp(1), 
        backgroundColor:'#4d2600',
        bottom: hp(8.53),
        right: wp(0.7),
        width: wp(97.5),
        height: hp(9),
        borderRadius: hp(1)
      },
      image: {
        resizeMode: 'contain',
        height: hp(6.6),
        width: wp(18),
        borderRadius: hp(2.8),
        top: hp(0.3),
        right: wp(2)
      },
      textContainer: {
        padding: wp(1.7),
        right: wp(3)
      }, 
      title: {
        color: '#fff',
        fontSize: hp(2.1),
        fontWeight: 'bold'
      },
      artist: {
        color: '#a6a6a6',
        fontSize: hp(1.8),
      },
      iconContainer: {
        position: 'absolute',
        alignSelf: 'center',
        flexDirection: 'row',
        right: wp(6),
      }
});

export default PlayerWidget;
