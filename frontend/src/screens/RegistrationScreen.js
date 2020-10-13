import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  Input,
} from '@ui-kitten/components';

export default function RegistrationScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInButtonPress = () => {
    //navigation && navigation.goBack();
    console.log(email);
    console.log(password);

    // if (name.length !== 0 && email.length !== 0 && password.length !== 0) {
    //   console.log('success');
    navigation.navigate('addhome');
    // } else {
    //   console.log('error');
    // }
  };

  const onSignUpButtonPress = () => {
    navigation.navigate('register');
  };

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
        <Button style={{marginTop: 20}} onPress={onSignInButtonPress}>
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
