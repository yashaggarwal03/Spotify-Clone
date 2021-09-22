import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


export default function Album (props) {


  return (
    <View style={styles.container}>
       <TouchableOpacity onPress={() => props.navigation.navigate("Album")}>
      <Image style={styles.imageStyle} source={props.albumImage} />
      <Text allowFontScaling={false} numberOfLines={1} style={styles.titleFont}>{props.title}</Text>
      <Text allowFontScaling={false} numberOfLines={1} style={styles.artistFont}>
        {props.artist}
      </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(40),
    height: hp(29),
    marginTop: hp(2),
    marginHorizontal: wp(2)
  },
  imageStyle: {
    resizeMode: 'contain',
    width: wp(40),
    height: hp(21),
    alignSelf: 'center',
  },
  titleFont: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(2),
    marginTop: hp(1.5),
  },
  artistFont: {
    color: '#8c8c8c',
    fontSize: hp(2),
  },
});
