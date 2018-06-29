import React from 'react';
ipmort { View, Text, Button } from 'react-native';
import { AppConsumer } from './context/app-context';

export default class TestScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { };
  }
  
  render() {
    return (
      <View style={{paddingTop: 50}}>
        <Text>Test Screen</Text>
      </View>
    );
  }
}
