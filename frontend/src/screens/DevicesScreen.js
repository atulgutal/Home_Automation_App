import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  Input,
  withStyles,
  Divider,
} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header} from '../components/Header';

export default function DevicesScreen({navigation}) {
  const onAddDeviceButtonPress = () => {
    navigation.navigate('addDevice');
  };

  return (
    <View>
      <Header navigation={navigation} name={'Devices'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    marginTop: 30,
  },
  title: {
    paddingLeft: 100,
  },
});
