import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Album = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source={require('../assets/Shershaah.jpg')}/>
            <Text style={styles.title}>Album Title</Text>
            <Text style={styles.artist}>Artist Name</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: wp(40),
        height: hp(27),
        
    },
    imageStyle:{
        resizeMode: 'contain',
        width:wp(40),
        height: hp(21),
        alignSelf:'center'
    },
    title:{
        color:'#fff',
        fontWeight:'bold',
        marginTop: hp(1.5)
    },
    artist:{
        color:'#8c8c8c'
    }
})

export default Album;

