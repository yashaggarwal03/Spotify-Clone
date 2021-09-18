import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';  

import Album from '../components/Album';
const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Album/>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
})

export default HomeScreen;
