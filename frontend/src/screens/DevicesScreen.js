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

export default function DevicesScreen({navigation}) {
  const onAddDeviceButtonPress = () => {
    navigation.navigate('addDevice');
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <KeyboardAwareScrollView>
        <View style={styles.headerContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title} category="h3">
              Devices
            </Text>
            <View style={{paddingLeft: 40}}>
              <Button style={{height: 30}} onPress={onAddDeviceButtonPress}>
                Add
              </Button>
            </View>
          </View>
          <Divider />
          <View>
            <Text style={styles.body} category="h3">
              No device added !!
            </Text>
          </View>
        </View>
        <View style={styles.formContainer}></View>
      </KeyboardAwareScrollView>
    </Layout>
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
