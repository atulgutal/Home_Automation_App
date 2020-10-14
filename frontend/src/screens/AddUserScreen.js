import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Layout,
  Button,
  Text,
  Input,
  MenuItem,
  Icon,
} from '@ui-kitten/components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Header} from '../components/Header';
import {SystemContext} from '../Utils/Context';

const AddIcon = (props) => <Icon {...props} name="plus-outline" />;

export default function AddUserScreen({navigation}) {
  const [emails, setEmails] = useState(['']);
  //console.log('add home');
  const {modeSet} = useContext(SystemContext);

  //   const onAddUserButtonPress = () => {
  //     navigation.navigate('home', (initialParams = {mode: 'signin'}));
  //   };

  const handleClick = () => {
    //console.log('hii');
    setEmails([...emails, '']);
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
      <Layout style={{flex: 1}}>
        <Layout>
          <Header navigation={navigation} name={'Add User'} />
        </Layout>
        <Layout
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Layout style={styles.formContainer}>
            {emails.map((email, i) => {
              if (i == emails.length - 1) {
                return (
                  <View key={email} style={{flexDirection: 'row'}}>
                    <Input
                      style={{width: 300}}
                      placeholder="Email"
                      value={emails}
                    />
                    {/* <Button style={{height: 40}} onPress={handleClick}>
                      +
                    </Button> */}
                    <MenuItem accessoryRight={AddIcon} onPress={handleClick} />
                  </View>
                );
              }
              return <Input key={i} style={{}} />;
            })}
            <Button
              style={{marginTop: 20}}
              onChangeText={() => {
                setEmails([...emails, email]);
              }}
              onPress={() => modeSet()}>
              Add User
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
  formContainer: {flex: 1, marginTop: 70, width: 300},
});
