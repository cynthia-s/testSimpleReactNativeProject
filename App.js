import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Form from './app/FormComponent';

export default class HelloWorldApp extends Component {
  render() {
    const wrapperStyle = {
      flex: 1,
      flexDirection: 'column',
    };
    const styles = {
      headerStyle: {
        backgroundColor: 'pink',
        flex: 1,
      },
      bodyStyle: {
        backgroundColor: 'white',
        flex: 4,
      },
      footerStyle: {
        backgroundColor: 'pink',
        flex: 1,
      },
    }
    return (
      // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      //   <Text>Hello, world!</Text>
      //   <Greeting name="test" />
      //   <View style={{flex: 1, flexDirection: 'row'}}>
      //     <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}/>
      //   </View>
      //   <View>
      //     <Form></Form>
      //   </View>
      //   <View>
      //     <Button buttonText="clickhere"></Button>
      //   </View>
      // </View>
      <View style={wrapperStyle}>
        <View style={styles.headerStyle}>
          <Text>This is the header.</Text>
        </View>
        <View style={styles.bodyStyle}>
          <Text>This is the body.</Text>
          <Form></Form>
        </View>
        <View style={styles.footerStyle}>
          <Text>This is the footer.</Text>
        </View>
      </View>
    );
  }
}
