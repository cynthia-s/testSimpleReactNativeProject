import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Blink extends Component {
  constructor(props) {
    super(props);
    // this.state = {isShowingText: true};
  }

  state = {
    isShowingText : true
  };
  componentDidMount() {
    setInterval(() => (
      this.setState({ isShowingText : !this.state.isShowingText})
    ), 3000)
  };

  render() {
    return (
      <View>
        <View>
        <Text>{this.props.text}</Text>
        </View>
      </View>
    );
  }
}

export default Blink;