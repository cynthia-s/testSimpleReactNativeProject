import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Greeting from './app/TestComponent';
import Form from './app/FormComponent';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Greeting name="test" />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
        </View>
        <View>
          <Form></Form>
        </View>
      </View>
    );
  }
}
