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
import RemindersScreen from '../screens/RemindersScreen';

const DrawerStack = createDrawerNavigator();

const HomeIcon = (props) => <Icon {...props} name="home-outline" />;

const ProfileIcon = (props) => <Icon {...props} name="person-outline" />;

const DeviceIcon = (props) => <Icon {...props} name="smartphone-outline" />;

const ReminderIcon = (props) => <Icon {...props} name="clock-outline" />;

const ContactIcon = (props) => <Icon {...props} name="email-outline" />;

const Header = (props) => (
  <React.Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../assets/user_icon.png')}
    />

    <Layout style={styles.layout} level="1">
      <Text style={styles.name}>Atul Gutal</Text>
      <Text style={styles.email}>gutz309@gmail</Text>
    </Layout>

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
      <DrawerItem title="Devices" accessoryLeft={DeviceIcon} />
      <DrawerItem title="Reminders" accessoryLeft={ReminderIcon} />
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
      <DrawerStack.Screen name="devices" component={DevicesScreen} />
      <DrawerStack.Screen name="reminders" component={RemindersScreen} />
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
  layout: {
    margin: 10,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
