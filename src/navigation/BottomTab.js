import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//Importing vector-icons
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';

//Importing HomeScreen
import HomeScreen from '../screens/HomeScreen';
import AlbumScreen from '../screens/AlbumScreen';

//Declaring HomeStack and Tab
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

//Declaring HomeStackScreen for Navigation to AlbumScreen
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator initialRouteName="HomeScreen">
      <HomeStack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerShown: true,
        }}
      />
      <HomeStack.Screen
        name="Album"
        component={AlbumScreen}
        options={{
          title: 'Album',
          headerShown: true,
        }}
      />
    </HomeStack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {height: hp(8.5)}}}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {bottom: hp(0.75), fontSize: hp(1.4)},
          tabBarIcon: ({focused}) => (
            <Foundation
              name="home"
              size={30}
              color={focused ? '#fff' : '#808080'}
            />
          ),
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {bottom: hp(0.75), fontSize: hp(1.4)},
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="search-outline"
              size={30}
              color={focused ? '#fff' : '#808080'}
            />
          ),
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Your Library"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {bottom: hp(0.75), fontSize: hp(1.4)},
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name="library-music"
              size={30}
              color={focused ? '#fff' : '#808080'}
            />
          ),
          tabBarActiveTintColor: '#fff',
        }}
      />
      <Tab.Screen
        name="Premium"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {bottom: hp(0.75), fontSize: hp(1.4)},
          tabBarIcon: ({focused}) => (
            <Entypo
              name="spotify"
              size={30}
              color={focused ? '#fff' : '#808080'}
            />
          ),
          tabBarActiveTintColor: '#fff',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
