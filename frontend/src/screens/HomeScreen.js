import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  Input,
} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <KeyboardAwareScrollView>
        <View style={styles.headerContainer}>
          <Text category="h3">Home</Text>
        </View>
        <View>
          <Text style={styles.body} category="h3">
            No devices added !!
          </Text>
        </View>
      </KeyboardAwareScrollView>
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
});
