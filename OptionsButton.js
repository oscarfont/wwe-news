import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
// Correct
import { Icon } from 'react-native-elements';
//import console = require('console');

class OptionsButton extends Component {

  render() {
    return (
      <View style={this.props.style}>
        <Icon type='material-community' 
        name='dots-vertical' color='white'/>
      </View>
    );
  }
}

export default OptionsButton;