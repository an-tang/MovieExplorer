import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ListView,
  ActivityIndicator,
  NetInfo,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Catelory from '../components/category.js'

class Genre extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Genres',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: (
      <View style={styles.headerRight}>
        <TouchableOpacity
          onPress={() => navigation.navigate('search')}>
          <Icon name='search' size={25} color={'#fefefe'} style={{ marginRight: 5 }}> </Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('about')}>
          <Icon name='info' size={25} color={'#fefefe'}> </Icon>
        </TouchableOpacity>
      </View>
    )
  });

  constructor() {
    super();
    this.state = {
      dataSource: this.listData([{ id: "id", name: "null" }]),
      isLoading: true,
      isOnline: null,
    };
  }
  componentDidMount() {
    NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectionChange);
    NetInfo.isConnected.fetch().then(
      (isConnected) => { this.setState({ isOnline: isConnected }); if (isConnected) this.getGenreFromApi(); }
    );
  }

  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  handleConnectionChange = isConnected => {
    if (isConnected) {
      this.setState({ isOnline: true })
      this.getGenreFromApi();
    }
    else
      this.setState({ isOnline: false })
  };

  listData(data) {
    ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return ds.cloneWithRows(data);
  }

  alert() {
    Alert.alert(
      'Movie Explorer',
      'No internet connection!!!',
      [
        { text: 'OK'}
      ]
    )
  }
  getGenreFromApi() {
    return fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=f7485fa464693c4a4b1b3e4b580e4d40')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: this.listData(responseJson.genres),
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isOnline === false) {
      Alert.alert(
        'Notification',
        'No internet connection!!!',
        [
          { text: 'OK'}
        ]
      )
    }

    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" style={styles.colorLoading} />
        </View>
      )
    }
    else {
      return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <Catelory name={rowData.name} id={rowData.id} navigate={navigate}
              isOnline={this.state.isOnline}>
            </Catelory>
          }
        />
      );
    }
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  colorLoading: {
    color: "#0000ff",
  },
  headerStyle: {
    backgroundColor: 'rgb(47, 54, 61)',
    shadowOpacity: 0
  },
  headerTitleStyle: {
    flex: 1,
    marginStart: 80,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fefefe',
    fontFamily: 'MuseoSansRounded-300',
    fontWeight: '100',
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 5
  }
});

export default Genre;