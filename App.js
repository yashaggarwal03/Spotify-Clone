import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native'; 

import BottomTab from './src/components/BottomTab';

const App = () => {
  return (
    <NavigationContainer theme={DarkTheme}>     
      <BottomTab/>
    </NavigationContainer>
  )
}


export default App;
