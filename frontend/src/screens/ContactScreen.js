import React, {useState, useContext} from 'react';
import {StyleSheet, View} from 'react-native';

export default function ContactScreen({navigation}) {
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <KeyboardAwareScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.title} category="h1">
            Contact
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

  title: {
    color: 'black',
  },
});
