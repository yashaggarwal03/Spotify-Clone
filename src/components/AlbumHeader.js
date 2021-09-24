import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Importing Icons
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AlbumHeader = props => {
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={props.header.image} />
      </View>
      <Text allowFontScaling={false} style={styles.nameText}>
        {props.header.name}
      </Text>
      <Text allowFontScaling={false} style={styles.yearText}>
        {props.header.year}
      </Text>
      <View style={styles.iconContainer}>
        <EvilIcons
          style={{bottom: hp(0.2)}}
          name="heart"
          size={hp(5)}
          color="#a6a6a6"
        />
        <Entypo
          style={{marginLeft: wp(5)}}
          name="dots-three-vertical"
          size={hp(3)}
          color="#a6a6a6"
        />
      </View>
      <MaterialIcons
        style={styles.playButton}
        name="play-circle-fill"
        size={hp(9)}
        color="#1fc75a"
      />
      <Entypo 
        style={styles.shuffle}
        name='shuffle'
        size={hp(2)}
        color='#1fc75a'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: hp(33),
  },
  imageStyle: {
    resizeMode: 'contain',
    height: hp(30),
  },
  nameText: {
    color: '#fff',
    fontSize: hp(3.5),
    fontWeight: 'bold',
    bottom: hp(0.5),
    marginLeft: wp(4),
  },
  yearText: {
    color: '#a6a6a6',
    fontSize: hp(2),
    bottom: hp(0.5),
    marginLeft: wp(4),
    marginVertical: hp(1),
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: wp(4),
    marginBottom: hp(2),
  },
  playButton: {
    position: 'absolute',
    right: wp(2),
    top: hp(39),
  },
  shuffle: {
    position: 'absolute',
    right: wp(2),
    top: hp(46),
    backgroundColor: '#333',
    // borderWidth: hp(1),
    borderRadius: hp(2)
  }
});

export default AlbumHeader;
