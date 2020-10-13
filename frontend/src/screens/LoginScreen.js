import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Button,
  Text,
  Input,
  withStyles,
} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInButtonPress = () => {
    //navigation && navigation.goBack();
    console.log(email);
    navigation.navigate('HomeStack', {screen: 'home'});

    console.log(password);
    // if (email === 'admin' && password === '12345') {
    //   console.log('success');
    //   navigation.navigate('home');
    // } else {
    //   console.log('error');
    // }
  };

  const onSignUpButtonPress = () => {
    navigation.navigate('register');
  };

  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <KeyboardAwareScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.title} category="h1">
            Sign In
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(nextValue) => setEmail(nextValue)}
          />
          <Input
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={(nextValue) => setPassword(nextValue)}
          />
          <Button style={{marginTop: 20}} onPress={onSignInButtonPress}>
            Sign In
          </Button>
          <Text onPress={onSignUpButtonPress} style={{marginTop: 10}}>
            Don't have an account? <Text>Sign Up</Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </Layout>
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

  input: {
    marginTop: 20,
  },
  title: {
    color: 'black',
  },
});
