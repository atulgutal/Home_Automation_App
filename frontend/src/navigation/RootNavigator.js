import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStackNavigator from './AuthStackNavigator';
import HomeStackNavigator from './HomeNavigator';

const RootStack = createStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name={'AuthStack'}
          component={AuthStackNavigator}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name={'HomeStack'}
          component={HomeStackNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
