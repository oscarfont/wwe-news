import React from 'react';
import { StyleSheet } from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import MainPage from './MainPage.js'
import SplashScreen from './SplashScreen.js';

const RootStack = createStackNavigator({
  Splash: {
    screen: SplashScreen,
    navigationOptions: {
      headerShown: false,
    }
  },
  Home: {
    screen: MainPage
  }
});

const styles = StyleSheet.create({
  header:{
    backgroundColor: "transparent"
  }
});

RootStack.navigationOptions = {
  headerStyle: {        
    backgroundColor: "transparent"      
  }
}

const App = createAppContainer(RootStack);
export default App;