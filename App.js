import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native'; 
import {StatusBar} from 'react-native';

import BottomTab from './src/navigation/BottomTab';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>     
      <StatusBar translucent={true} backgroundColor="transparent"/>
      <BottomTab/>
    </NavigationContainer>
  )
}


export default App;
