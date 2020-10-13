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
import ContactScreen from '../screens/ContactScreen';
import ProfileScreen from '../screens/ProfileScreen';

const DrawerStack = createDrawerNavigator();

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const ProfileIcon = (props) => <Icon {...props} name="person-outline" />;

const DeviceIcon = (props) => <Icon {...props} name="smartphone-outline" />;

const ContactIcon = (props) => <Icon {...props} name="email-outline" />;

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
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));

  return (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={(index) => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem title="Home" accessoryLeft={HomeIcon} />
      <DrawerItem title="Profile" accessoryLeft={ProfileIcon} />
      <DrawerItem title="Device" accessoryLeft={DeviceIcon} />
      <DrawerItem title="Contact" accessoryLeft={ContactIcon} />
    </Drawer>
  );
};

export default function DrawerNavigator() {
  return (
    <DrawerStack.Navigator
      initialRouteName="home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <DrawerStack.Screen name="home" component={HomeScreen} />
      <DrawerStack.Screen name="profile" component={ProfileScreen} />
      <DrawerStack.Screen name="device" component={DevicesScreen} />
      <DrawerStack.Screen name="contact" component={ContactScreen} />
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
