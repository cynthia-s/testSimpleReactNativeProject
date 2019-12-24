import React, {Component} from 'react';
import {TextInput, Text, View} from 'react-native';

class Form extends Component{
  constructor(props){
    super(props);
    this.state ={
      text: ''
    }
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height:40}}
          placeholder="Type Here"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Text style={{padding:10, fontSize:42}}>
        current text = {this.state.text}
        </Text>
      </View>
    )
  }
}

export default Form;
