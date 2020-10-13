import * as React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegistrationScreen';

const AuthStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={'login'}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name={'register'}
        component={RegisterScreen}
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}
