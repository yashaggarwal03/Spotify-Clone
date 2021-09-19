import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';  

import Album from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <AlbumCategory/>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1
    },
})

export default HomeScreen;
