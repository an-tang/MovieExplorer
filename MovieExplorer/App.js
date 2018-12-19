import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';
// react-navigation hướng dẫn https://reactnavigation.org/docs/en/getting-started.html
import {StackNavigator,} from 'react-navigation';
import ListScreen from './src/source/listScreen.js';
import DetailScreen from './src/source/detailScreen.js';

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = StackNavigator(
  {
    listScreen: {screen: ListScreen},
    detailScreen: {screen: DetailScreen}
  },
  {
    initialRouteName: 'listScreen',
  }
);