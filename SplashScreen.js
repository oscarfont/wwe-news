import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import moment from "moment";
import { NavigationActions, StackActions } from 'react-navigation';
//import console = require('console');

class SplashScreen extends Component {

  articleExists(articles, item){
    for (var i=0; i<articles.length; i++) {
      if(articles[i].article === item.article){
        return true;
      }
    }
    return false;
  }

  computePublished(dateMoment) {
    var today = moment();
    var diff = today.diff(dateMoment,'hours');
    var res = Math.floor(diff/24);

    var published = "";
    if(res == 0){
      published = diff + " hours ago";
    }else if (res == 1){
      published = "yesterday";
    }else{
      published = res + " days ago"
    }

    return published;
  }

  _fetchNews = () => {
    return fetch('https://www.wwe.com/feeds/rss/features')
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
        var i;
        for (i in rss.items) {
          var title = rss.items[i].title;
          var url = rss.items[i].links[0].url;
          var published = this.computePublished(rss.items[i].published);
          var description = rss.items[i].description
          var start = 'src="'
          var end = '\" border'
          var pos0 = description.indexOf(start)+5;
          var pos1 = description.indexOf(end);
          var image = description.slice(pos0,pos1);
          var item = {
            id: i,
            title: title,
            article: url,
            date: published,
            picture: image
          }
          // check if article already exists in array
          if(!this.articleExists(this.articles, item)){
            this.articles.push(item);
          }
        }
      }).catch((error) => {
        throw new Error("NETWORK ERROR");
      });
  }

  constructor(){
    super();
    this.articles = [];
    this.error = false;
  }

  componentDidMount(){
    //console.log("Redirect to main screen")
    this._fetchNews().then((response) => {
      setTimeout(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home', params: {data: this.articles}})],
        });
        this.props.navigation.dispatch(resetAction);
      }, 1500);
    }).catch((error) => {
      console.log("error");
      this.error = true;
      setTimeout(() => {
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Home', params: {data: []}})],
        });
        this.props.navigation.dispatch(resetAction);
      }, 1500);
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Image  style={styles.image} 
                source={require('./assets/wwe-logo.png')}/>
        <Text style={styles.title}>NEWS</Text>
        <Text style={styles.signature}>From Óscar Font</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width:'100%',
    height: '100%',
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: 'center'
  },
  image:{
    width: 128,
    height: 128
  },
  title:{
    fontFamily: 'sans-serif-condensed',
    fontSize: 32,
    textAlign: 'justify',
    color: 'white',
    fontWeight: 'bold'
  },
  signature: {
    fontFamily: 'Roboto',
    fontSize: 16,
    textAlign: 'justify',
    color: 'white'
  }
});

export default SplashScreen;