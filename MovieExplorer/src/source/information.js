import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Image,
} from 'react-native';
import { Rating } from 'react-native-elements';

class DetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Movie Detail',
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle
    });

    constructor() {
        super();
        this.state = {
            id: '',
            adult: '',
            backdrop_path: '',
            poster_path: '',
            popularity: '',
            budget: '',
            title: '',
            country: 'Unknown',
            original_language: '',
            vote_average: '',
            vote_count: '',
            tagline: '',
            runtime: '',
            release_date: '',
            revenue: '',
            isLoading: true,
        };
    }

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');
        this.getMovieFromApi(id);
    }

    getMovieFromApi(id) {
        return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=f7485fa464693c4a4b1b3e4b580e4d40')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    id: responseJson.id,
                    adult: responseJson.adult,
                    backdrop_path: responseJson.backdrop_path,
                    popularity: responseJson.popularity,
                    budget: responseJson.budget,
                    title: responseJson.title,
                    poster_path: responseJson.poster_path,
                    original_language: responseJson.original_language,
                    language: responseJson.spoken_languages[0].name,
                    vote_average: responseJson.vote_average,
                    vote_count: responseJson.vote_count,
                    tagline: responseJson.tagline,
                    runtime: responseJson.runtime,
                    release_date: responseJson.release_date,
                    revenue: responseJson.revenue,
                    overview: responseJson.overview,
                    isLoading: false,
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" style={styles.colorLoading} />
                </View>
            )
        } else {
            return (
                <View style={styles.container}>
                    <View style={styles.row}>
                        <View style={{ flex: 3 }}>
                            <Image source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + this.state.poster_path }}
                                style={styles.image} />
                        </View>
                        <View style={{ flex: 5 }}>
                            <Text style={styles.title}>{this.state.title}</Text>
                            <Text style={styles.text}>{this.state.release_date}</Text>
                            <Text style={styles.text}>Popularity: {this.state.popularity}</Text>
                            <Text style={styles.text}>Language: {this.state.language}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.text}>{this.state.vote_average}</Text>
                                <Rating
                                    style={{paddingTop: 5, paddingLeft: 4}}
                                    imageSize={20}
                                    readonly
                                    startingValue={1}
                                    ratingCount={1}
                                />
                            </View>
                            <Text style={styles.text}>Time: {this.state.runtime} minutes</Text>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.overview}>Overview</Text>
                        <ScrollView>
                            <Text style={styles.overviewText}>{this.state.overview}</Text>
                        </ScrollView>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerStyle: {
        backgroundColor: 'rgb(47, 54, 61)',
        shadowOpacity: 0
    },
    headerTitleStyle: {
        flex: 1,
        marginRight: 80,
        alignSelf: 'center',
        textAlign: 'center',
        color: '#fefefe',
        fontFamily: 'MuseoSansRounded-300',
        fontWeight: '300',
    },
    content: {
        flex: 0,
        marginTop: 50,
        marginLeft: 8
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
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        alignSelf: 'stretch',
    },
    image: {
        height: 180,
        width: '90%',
    },
    title: {
        fontSize: 20,
        color: '#000'
    },
    text: {
        fontSize: 14,
        color: '#000',
        paddingTop: 4,
    },
    row: {
        flex: 0,
        flexDirection: 'row',
        height: 130,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    },
    overview: {
        fontSize: 18,
        color: '#000',
    },
    overviewText:{
        fontSize: 16,
        color: '#000',
    }
});

export default DetailScreen;