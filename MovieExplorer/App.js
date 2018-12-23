import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

import {StackNavigator,} from 'react-navigation';
import Genre from './src/source/genre.js'
import ListScreen from './src/source/listScreen.js';
import DetailScreen from './src/source/detailScreen.js';
import Information from './src/source/information.js';
import Search from './src/source/search.js';
import About from './src/source/about.js';

export default class App extends Component {
  render() {
    return <RootStack/>;
  }
}

const RootStack = StackNavigator(
  {
    genre: {screen: Genre},
    listScreen: {screen: ListScreen},
    detailScreen: { screen: DetailScreen },
    information: {screen: Information},
    search: {screen: Search},
    about: {screen: About},
  },
  {
    initialRouteName: 'genre',
  }
);