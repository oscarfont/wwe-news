'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Modal from 'react-native-modal';
//import console = require('console');


class AboutModal extends Component{

  constructor(props) {
    super(props);
  }

  render(){
    const { isVisible, closeModal } = this.props;
    return (
        <Modal 
          isVisible={isVisible}
          onSwipeComplete={closeModal}
          swipeDirection={['down']}
          style={styles.aboutModal}>
          <View style={styles.aboutCard}>
            <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>About</Text>
            </View>
            <Text style={styles.text}>All rights of the news contents belong to WWE.</Text>
            <Text style={styles.text}>App developed with learning purposes.</Text>
            <View style={styles.socialMedia}>
              <Text style={styles.socialMediaText}>LinkedIn: ofont99</Text>
              <Text style={styles.socialMediaText}>Github: oscarfont</Text>
              <Text style={styles.socialMediaText}>Instagram: ofont_</Text>
            </View>
            <View style={styles.buttonContainer}>
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
    justifyContent: 'flex-end',
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
    alignSelf: 'center'
  },
  modalButton:{
    backgroundColor: 'black',
    padding: 5,
    borderRadius: 5
  }
});

export default AboutModal;