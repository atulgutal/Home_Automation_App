import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header} from '../components/Header';

export default function AddDeviceScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} name={'Add Device'} />
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
