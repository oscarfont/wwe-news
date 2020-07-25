import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import OptionsButton from './OptionsButton.js'
import OptionsList from './OptionsList.js'
//import console = require('console');

class HeaderBar extends Component {
  state={
    isVisible:false
  }

  renderList = () => {
    this.setState({
      isVisible:!this.state.isVisible//toggles the visibilty of the text
    })
  };

  render(){
    //console.log(this.props.value);
    return(
      <View style={styles.optcont}>
        <View style={styles.view}>
          <Image  style={styles.image} 
                  source={require('./assets/wwe-logo.png')}/>
          <Text style={styles.headTitle}>News</Text>
          <TouchableOpacity onPress={this.renderList}>
            <OptionsButton style={styles.dotsContainer}></OptionsButton>
          </TouchableOpacity>
        </View>
        {this.state.isVisible?<OptionsList value={this.props.value}></OptionsList>:null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view:{
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-between'
  },
  headTitle:{
    fontFamily: 'sans-serif-condensed',
    fontSize: 32,
    textAlign: 'justify',
    color: 'white',
    marginTop: 10,
    //marginLeft: 90,
    fontWeight: 'bold'
  },
  image:{
    width: 40, 
    height: 40,
    marginTop: 10,
    marginLeft: 32,
    marginBottom: 10
  },
  dotsContainer: {
    marginTop: 20,
    marginRight: 32
  }
});

export default HeaderBar;