import * as React from 'react';
import {useState, useMemo, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {AuthContext} from '../Utils/Context';
import AuthStackNavigator from './AuthStackNavigator';
import HomeStackNavigator from './HomeNavigator';
import DrawerStackNavigator from './DrawerStackNavigator';

const RootStack = createStackNavigator();

export default function RootNavigator({navigation}) {
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(() => {
    return {
      signIn: (email, password) => {
        //console.log(email);
        // if (email === 'admin' && password === '12345') {
        //   console.log('success');
        //   setUserToken('asdf');
        // } else {
        //   console.log('error');
        // }
        setUserToken('asdf');
      },
      signUp: () => {
        setUserToken('asdf');
      },
      signOut: () => {
        setUserToken(null);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <RootStack.Navigator headerMode="none">
          {userToken ? (
            <RootStack.Screen
              name={'DrawerStack'}
              component={DrawerStackNavigator}
              options={{headerShown: false}}
            />
          ) : (
            <RootStack.Screen
              name={'AuthStack'}
              component={AuthStackNavigator}
              options={{headerShown: false}}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
