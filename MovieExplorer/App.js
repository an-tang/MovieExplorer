import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
} from 'react-native';

import {StackNavigator,} from 'react-navigation';
import Genre from './src/source/genre.js'
import ListScreen from './src/source/listScreen.js';
import DetailScreen from './src/source/detailScreen.js';
import Trailer from './src/source/trailerScreen.js';
import Information from './src/source/information.js';
import Search from './src/source/search.js';
import About from './src/source/about.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ isLoading: false }) }, 2000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <Image style={styles.image} source={require('./src/image/film_2.png')} />
        </View>
      )
    }
    else
      return <RootStack />;
  }
}

const RootStack = StackNavigator(
  {
    genre: { screen: Genre },
    listScreen: { screen: ListScreen },
    detailScreen: { screen: DetailScreen },
    trailer: { screen: Trailer },
    information: { screen: Information },
    search: { screen: Search }, 
    about: {screen: About},
  },
  {
    initialRouteName: 'genre',
  }
);

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    alignSelf: 'stretch',
    backgroundColor: '#000'
  }
});