import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyDhz3SuFGcUPkS2ixDJ9IAZlq2v9V-YXuI",
      authDomain: "one-time-password-f511b.firebaseapp.com",
      databaseURL: "https://one-time-password-f511b.firebaseio.com",
      projectId: "one-time-password-f511b",
      storageBucket: "one-time-password-f511b.appspot.com",
      messagingSenderId: "697275869722"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
