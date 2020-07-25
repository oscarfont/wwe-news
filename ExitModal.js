'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  BackHandler
} from 'react-native';
import Modal from 'react-native-modal';
//import console = require('console');


class ExitModal extends Component{

  constructor(props) {
    super(props);
  }

  exitApp = () => {
    BackHandler.exitApp();
  }

  render(){
    const { isVisible, closeModal } = this.props;
    return (
        <Modal 
          isVisible={isVisible}
          onSwipeComplete={closeModal}
          swipeDirection={['up','right','left','down']}
          style={styles.aboutModal}>
          <View style={styles.aboutCard}>
            <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Exit</Text>
            </View>
            <Text style={styles.text}>Do you really want to exit the app?</Text>
            <View style={styles.buttonContainer}>
              <TouchableHighlight 
                      style={styles.exitButton}
                      onPress={this.exitApp}>
                <Text style={styles.cardTitle}> Exit </Text>     
              </TouchableHighlight>
              <TouchableHighlight 
                      style={styles.modalButton}
                      onPress={closeModal}>
                <Text style={styles.cardTitle}> Close </Text>     
              </TouchableHighlight>
            </View>
          </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  aboutModal : {
    width: '100%',
    //backgroundColor: 'red',
    //justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center'
  },
  aboutCard : {
    width: '100%',
    backgroundColor: '#303030',
    borderRadius: 10,
    //padding: 20
  },
  text: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    textAlign: 'justify',
    //fontWeight: 'bold',
    margin: 10,
    color: 'white'
  },
  cardHeader : {
    backgroundColor: 'black',
    margin: 2,
    padding: 10,
    borderRadius: 10
  },
  cardTitle:{
    fontFamily: 'sans-serif-condensed',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
    //marginTop: 10,
    //marginLeft: 90,
    fontWeight: 'bold'
  },
  socialMedia:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15
  },
  socialMediaText:{
    fontFamily: 'sans-serif-condensed',
    fontSize: 12,
    color: 'white'
  },
  buttonContainer:{
    width: '30%',
    marginBottom: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  modalButton:{
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5
  },
  exitButton:{
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5,
    marginRight: 20
  }
});

export default ExitModal;