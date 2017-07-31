import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Button extends Component {
  static navigationOptions = {
    title: 'Button',
  }

  render() {
    return (
      <View>
        <Text>Successfully switched pages!</Text>
      </View>
    );
  }
}

Button.propTypes = {

}

export default Button;