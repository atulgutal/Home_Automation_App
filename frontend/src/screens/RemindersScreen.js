import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header} from '../components/Header';

export default function RemindersScreen({navigation}) {
  return (
    <View>
      <Header navigation={navigation} name={'Reminders'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    marginTop: 100,
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    width: 300,
  },

  title: {
    color: 'black',
  },
});
