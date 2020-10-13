import * as React from 'react';
import {useState} from 'react';
import {Button, View, StyleSheet, ImageBackground} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  Drawer,
  DrawerItem,
  Layout,
  Text,
  IndexPath,
  Divider,
  Icon,
} from '@ui-kitten/components';

import HomeScreen from '../screens/HomeScreen';
import DevicesScreen from '../screens/DevicesScreen';

const DrawerStack = createDrawerNavigator();

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../assets/user_icon.png')}
    />
    <Divider />
  </React.Fragment>
);

export const DrawerContent = ({navigation, state}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <Drawer
      header={Header}
      selectedIndex={selectedIndex}
      onSelect={(index) => setSelectedIndex(index)}>
      <DrawerItem title="Home" accessoryLeft={HomeIcon} />
      <DrawerItem title="Device" accessoryLeft={HomeIcon} />
    </Drawer>
  );
};

export default function DrawerNavigator() {
  return (
    <DrawerStack.Navigator
      initialRouteName="home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerStack.Screen
        name="home"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <DrawerStack.Screen
        name="device"
        component={DevicesScreen}
        options={{title: 'Device'}}
      />
    </DrawerStack.Navigator>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
