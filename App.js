import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native'; 
import {StatusBar} from 'react-native';

import BottomTab from './src/components/BottomTab';
import FirstStack from './src/navigations/FirstStack';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>     
      <StatusBar translucent={true} backgroundColor="transparent"/>
      <BottomTab/>
    </NavigationContainer>
  )
}


export default App;
