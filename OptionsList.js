'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//import console = require('console');

const OPTIONS = [
  {
    id: '0',
    title: 'WWE.COM',
    url: 'https://www.wwe.com/'
  },
  {
    id: '1',
    title: 'About',
    url: 'pop-up'
  },
  {
    id: '2',
    title: 'Exit',
    url: 'close'
  },
];

function Item({item}){
  //console.log(item);
  return(
    <TouchableOpacity style={styles.button} onPressIn={() => alert(item.url)}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

class OptionsList extends Component{

  constructor() {
    super();
    //console.log(this.props.onOptionSelect);
  }

  render(){
    //console.log(this.props.value);
    return (
      <View styles={styles.container}>
        <TouchableOpacity style={styles.item} onPress={() => this.props.value(OPTIONS[0].url)}>
          <Text style={styles.title}>{OPTIONS[0].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => this.props.value(OPTIONS[1].url)}>
          <Text style={styles.title}>{OPTIONS[1].title}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress={() => this.props.value(OPTIONS[2].url)}>
          <Text style={styles.title}>{OPTIONS[2].title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '35%',
    position: 'absolute',
    top: 50,
    right: 0
  },
  item: {
    width: '100%',
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#454545',
    padding: 6,
  },
  button: {
    width: '100%',
    alignItems: "center",
    backgroundColor: "black",
    padding: 10,
    zIndex: 2
  },
  title: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default OptionsList;