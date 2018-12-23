import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ListView,
    Alert
} from 'react-native';
import SearchItem from './searchItem.js';
export default class Search extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Search',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
    });

    constructor() {
        super();
        this.state = {
            dataSource: this.listData([{ id: "id", title: "" }]),
            isLoading: true,
            text: '',
        };
    }

    componentDidMount() {

        if (this.props.name != "null") {
            this.getMoviesFromApi(this.props.name);
        }
    }

    listData(data) {
        ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        return ds.cloneWithRows(data);
    }

    getMoviesFromApi(text) {
        const temp = text.replace(" ", "+");
        return fetch('https://api.themoviedb.org/3/search/movie?api_key=f7485fa464693c4a4b1b3e4b580e4d40&query=' + temp)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    page: responseJson.page,
                    total_results: responseJson.total_results,
                    total_pages: responseJson.total_pages,
                    dataSource: this.listData(responseJson.results),
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
    render() {
        if (this.props.showComponent) {
            return (
                <View>
                    <ListView
                        style={styles.container}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData) =>
                            <SearchItem
                                id={rowData.id}
                                imageUri={rowData.poster_path}
                                name={rowData.title}
                                date={rowData.release_date}
                                navigate={this.props.navigate}
                                isOnline={this.props.isOnline}
                            />
                        } />
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    headerStyle: {
        backgroundColor: 'rgb(47, 54, 61)',
        shadowOpacity: 0
    },
    headerTitleStyle: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        marginRight: 80,
        color: '#fefefe',
        fontFamily: 'MuseoSansRounded-300',
        fontWeight: '300'
    },
});
