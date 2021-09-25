import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native'; 
import {StatusBar} from 'react-native';

import BottomTab from './src/navigation/BottomTab';
import PlayerWidget from './src/components/PlayerWidget';

const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#111"
  },
};

const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>     
      <StatusBar translucent={true} backgroundColor="transparent"/>
      <BottomTab/>
      <PlayerWidget/>
    </NavigationContainer> 
  )
}


export default App;
