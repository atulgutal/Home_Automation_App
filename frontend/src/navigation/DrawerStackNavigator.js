import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';

const DrawerStack = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <DrawerStack.Navigator initialRouteName="Home">
      <DrawerStack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
    </DrawerStack.Navigator>
  );
}
