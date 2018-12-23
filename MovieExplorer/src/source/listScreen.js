import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ListView,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

class ListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    headerTintColor: '#fff',
    headerStyle: styles.headerStyle,
    headerTitleStyle: styles.headerTitleStyle,
    headerRight: (
      <View style={styles.headerRight}>
        <TouchableOpacity style={{ paddingHorizontal: 5 }} onPress={() => navigation.navigate('search')}>
          <Icon name='search' size={25} color={'#fefefe'}> </Icon>
        </TouchableOpacity>
      </View>
    )
  });

  constructor() {
    super();
    this.state = {
      genderId: '',
      page: '',
      total_pages: '',
      results: this.listData([{ original_language: "en", id: "null" }]),
      isLoading: true,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const genderId = navigation.getParam('id', 'NO-ID');
    this.getMoviesFromApi(genderId);

  }


  listData(data) {
    ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return ds.cloneWithRows(data);
  }


  getMoviesFromApi(id) {
    return fetch('https://api.themoviedb.org/3/genre/' + id + '/movies?api_key=f7485fa464693c4a4b1b3e4b580e4d40')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          genderId: responseJson.id,
          page: responseJson.page,
          total_pages: responseJson.total_pages,
          results: this.listData(responseJson.results),
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.isLoading) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" style={styles.colorLoading} />
        </View>
      )
    }
    else {
      const width = (Dimensions.get('window').width / 3) - 4;
      return (
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.results}
          renderRow={(rowData) =>
            <TouchableOpacity onPress={() => navigate('detailScreen', { id: rowData.id, title: rowData.title })}>
              <Image style={{ width: width, height: 200, margin: 2 }}
                source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + rowData.backdrop_path }} />
            </TouchableOpacity>
          }
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    alignSelf: 'center',
    textAlign: 'center',
    color: '#fefefe',
    fontFamily: 'MuseoSansRounded-300',
    fontWeight: '300',
  },
  headerRight: {
    flexDirection: 'row',
    marginRight: 10
  }
});

export default ListScreen;