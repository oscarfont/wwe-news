'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Linking,
  Image,
  TouchableHighlight
} from 'react-native';
import Constants from 'expo-constants';
import ShareButton from './Share.js';
import HeaderBar from './HeaderBar.js';
import AboutModal from './AboutModal.js';
import ExitModal from './ExitModal.js';

type Props = {};

function onClick(url) {
  Linking.canOpenURL(url).then(supported => {
    if (supported) {
      Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  });
};

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
      <Image style={styles.image} 
              source={item.picture.length
                    ? {uri: item.picture}
                    : require('./assets/wwe-logo.png')} />
      <View style={styles.footer}>
        <ShareButton style={styles.icon} url={item.article}></ShareButton>
        <TouchableHighlight 
                style={styles.readMoreButton}
                onPress={()=>Linking.openURL(item.article)}>
          <Text style={styles.link}> READ MORE </Text>     
        </TouchableHighlight>
      </View>
      <Text style={styles.date}>{item.date}</Text>
    </View>
  );
}

export default class MainPage extends Component<Props>{

  static navigationOptions = {
    header: ({ navigation }) => <HeaderBar value={navigation.getParam('handleOption')}/>
  }

  state={
    aboutPopUp: false,
    exitPopUp: false
  }

  handleOption = (url) => {
    console.log(url);
    if(url === 'close'){
      //alert("CLOSE POPUP");
      this.setState({
        exitPopUp: true
      });
    }else if( url === 'pop-up'){
      //alert("ABOUT POPUP");
      this.setState({
        aboutPopUp: true
      });
    }else{
      onClick(url);
    }
  }

  closeAboutPopUp = () => {
    this.setState({
      aboutPopUp: false
    });
  }

  closeExitPopUp = () => {
    this.setState({
      exitPopUp: false
    });
  }

  constructor(props) {
    super(props);
    this.articles = this.props.navigation.state.params.data; 
  }

  componentDidMount() {
    this.props.navigation.setParams({ handleOption: this.handleOption });
  }

  emptyList(){
    return(
      <View style={styles.errorContainer}>
        <Text style={styles.error}>
          Ups something went wrong :( {"\n"}
          Check your Internet connection and restart the app!
        </Text>
      </View>
    )
  }

  render(){
    return(
        <SafeAreaView style={styles.container}>
          <FlatList
              contentContainerStyle={{ flexGrow: 1 }}
              disableVirtualization={false}
              data={this.articles}
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.id}
              ListEmptyComponent={this.emptyList}
          />
          <AboutModal isVisible={this.state.aboutPopUp}
                      closeModal={this.closeAboutPopUp}/>
          <ExitModal  isVisible={this.state.exitPopUp}
                      closeModal={this.closeExitPopUp}/>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#303030'
  },
  item: {
    backgroundColor: '#303030',
    //padding: 10
    //marginVertical: 2
  },
  title: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    textAlign: 'justify',
    //fontWeight: 'bold',
    margin: 15,
    color: 'white'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    //borderRadius: 20,
    overflow: 'hidden',
    //borderWidth: 2,
    //borderColor: 'white',
    justifyContent: 'center',
    //marginTop: 15,
    backgroundColor: "black"
  },
  link: {
    fontFamily: 'sans-serif-condensed',
    padding : 5,
    color: 'white'
  },
  icon: {
    marginTop: 10,
    marginLeft: 10
  },
  date: {
    fontSize: 10,
    marginTop: 5,
    marginLeft: 10,
    color: 'white'
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  readMoreButton:{
    marginTop: 5,
    marginRight: 5,
    backgroundColor: 'black',
    //padding: 5,
    borderRadius: 5
  },
  errorContainer: {
    width:'100%',
    height: '100%',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  error: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 50,
    color: 'white'
  }
});