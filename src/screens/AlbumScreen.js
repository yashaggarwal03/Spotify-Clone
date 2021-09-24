import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

//Importing Components and Data
import AlbumHeader from '../components/AlbumHeader';
import SongList from '../components/SongList';
import SongsData from '../models/AlbumData';

const AlbumScreen = ({route}) => {
  console.log(route.params);
  return (
    <View>
      
      <FlatList
        data={SongsData.songs}
        renderItem={({item}) => (
          <SongList icon={item.icon} title={item.title} artist={item.artist} />
        )}
        keyExtractor={item => item.id}
        ListHeaderComponent={<AlbumHeader header={SongsData}/>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AlbumScreen;
