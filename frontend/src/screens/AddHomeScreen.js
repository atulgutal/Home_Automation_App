import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Layout, Button, Text, Input} from '@ui-kitten/components';

import {Header} from '../components/Header';

export default function AddHomeScreen({navigation}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipcode] = useState('');

  //console.log('add user');

  //   const onAddHomeButtonPress = () => {
  //     console.log(name);
  //     console.log(address);
  //     console.log(city);
  //     console.log(state);
  //     console.log(country);
  //     console.log(zipcode);
  //     console.log('onAddHomeButtonPress');
  //     navigation.navigate('addUser', (initialParams = {mode: 'signup'}));
  //     navigation.navigate('DrawerStack', {screen: 'addUser'});
  //   };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <Layout style={{flex: 1}}>
        <Layout>
          <Header navigation={navigation} name={'Add Home'} />
        </Layout>
        <Layout
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Layout style={styles.formContainer}>
            <Input
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <Input
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <Input
              style={styles.input}
              placeholder="city"
              value={city}
              onChangeText={setCity}
            />
            <Input
              style={styles.input}
              placeholder="state"
              value={state}
              onChangeText={setState}
            />
            <Input
              style={styles.input}
              placeholder="country"
              value={country}
              onChangeText={setCountry}
            />
            <Input
              style={styles.input}
              placeholder="zipcode"
              value={zipcode}
              onChangeText={setZipcode}
            />
            <Button
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('addUser')}>
              Add Home
            </Button>
          </Layout>
        </Layout>
      </Layout>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    marginTop: 70,
    width: 300,
  },
  input: {
    marginTop: 20,
  },
});
