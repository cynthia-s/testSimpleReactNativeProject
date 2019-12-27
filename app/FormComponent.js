import React, {Component} from 'react';
import {TextInput, View, Button, Alert} from 'react-native';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state ={
      text: ''
    }
  }

  postTask() {
    axios({
      method: 'post',
      url: 'http://10.4.56.170:3000/tasks',
      data: {
        name: this.state.text,
      },
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  getTasks(){
    axios({
      method: 'get',
      url: 'http://10.4.56.170:3000/tasks',
    })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height:40}}
          placeholder="Type the task's name"
          onChangeText={text => this.setState({text})}
          value={this.state.text}
        />
        <Button title="POST" onPress={() => this.postTask()} />
        <Button title="GET TASKS" onPress={() => this.getTasks()} />
      </View>
    )
  }
}

export default Form;
