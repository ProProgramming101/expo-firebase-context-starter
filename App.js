import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './context/app-context';
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys';
import TestScreen from './TestScreen';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
  }
  
  render() {
    return (
      <AppProvider>
        <TestScreen />
      </AppProvider>
    );
  }
}
