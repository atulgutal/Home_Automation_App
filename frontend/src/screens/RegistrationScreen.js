import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layout, Button, Text, Input} from '@ui-kitten/components';

import {AuthContext} from '../Utils/Context';

export default function RegistrationScreen({navigation}) {
  const {onSignUpButtonPress} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const onSignUpButtonPress = () => {
  //   navigation.navigate('addHome');
  //   navigation.navigate('RootStack', {
  //     screen: 'DrawerStack',
  //     params: {
  //       screen: 'addHome',
  //     },
  //   });
  // };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.headerContainer}>
        <Text style={styles.title} category="h1">
          Sign Up
        </Text>
      </View>
      <View style={styles.formContainer}>
        <Input
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <Input
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
        <Button
          style={{marginTop: 20}}
          onPress={() => onSignUpButtonPress(name, email, password)}>
          Sign Up
        </Button>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    marginTop: 50,
    minHeight: 216,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 16,
    width: 300,
  },

  input: {
    marginTop: 20,
  },
  title: {
    color: 'black',
  },
});
