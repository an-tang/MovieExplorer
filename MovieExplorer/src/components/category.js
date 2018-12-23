import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Alert,
} from 'react-native';
import CatelogyCard from './catelogyCard.js';

class Catelory extends Component {
    constructor() {
        super();
        this.state = {
            genderId: '',
            isLoading: true,
            imageSoure: [],
            name: []
        };
    }

    componentDidMount() {
        const navigation = this.props;
        const genderId = navigation.id;
        this.getMoviesFromApi(genderId);
    }
    getMoviesFromApi(id) {
        return fetch('https://api.themoviedb.org/3/genre/' + id + '/movies?api_key=f7485fa464693c4a4b1b3e4b580e4d40')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    genderId: responseJson.id,
                    isLoading: false,
                    imageSoure: responseJson.results.map(function (v) { return v.poster_path }),
                    name: responseJson.results.map(function (v) { return v.title }),
                    id: responseJson.results.map(function (v) { return v.id })
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }

    alert() {
        Alert.alert(
            'Notification',
            'No internet connection!!!',
            [
                { text: 'OK'}
            ]
        )
    }
    render() {

        return (
            <View style={{ backgroundColor: 'white', paddingTop: 5 }}>
                <View style={{ flex: 0, backgroundColor: 'white', flexDirection: 'row' }}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <TouchableOpacity
                        style={{ marginRight: 10 }}
                        onPress={() => {
                            this.props.isOnline ?
                            this.props.navigate('listScreen', { id: this.state.genderId, name: this.props.name }) :
                            this.alert()
                        }}
                    >
                        <Text style={[styles.name, { paddingLeft: 160 }]}>Show more</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ height: 170, marginTop: 5 }}>
                    <ScrollView horizontal={true}
                        showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.isOnline ? this.props.navigate('detailScreen', {
                                    id: this.state.id[0],
                                    title: this.state.name[0]
                                }) : this.alert()
                            }}
                        >
                            <CatelogyCard
                                imageUri={this.state.imageSoure[0]}>
                            </CatelogyCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.isOnline ? this.props.navigate('detailScreen', {
                                    id: this.state.id[1],
                                    title: this.state.name[1]
                                }) : this.alert()
                            }}
                        >
                            <CatelogyCard
                                imageUri={this.state.imageSoure[1]}
                            >
                            </CatelogyCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.isOnline ? this.props.navigate('detailScreen', {
                                    id: this.state.id[2],
                                    title: this.state.name[2]
                                }) : this.alert()
                            }}
                        >
                            <CatelogyCard
                                imageUri={this.state.imageSoure[2]}
                                name={this.state.name[2]}>
                            </CatelogyCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.isOnline ? this.props.navigate('detailScreen', {
                                    id: this.state.id[3],
                                    title: this.state.name[3]
                                }) : this.alert()
                            }}
                        >
                            <CatelogyCard
                                imageUri={this.state.imageSoure[3]}
                                name={this.state.name[3]}>
                            </CatelogyCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.isOnline ? this.props.navigate('detailScreen', {
                                    id: this.state.id[4],
                                    title: this.state.name[4]
                                }) : this.alert()
                            }}
                        >
                            <CatelogyCard
                                imageUri={this.state.imageSoure[4]}
                                name={this.state.name[4]}>
                            </CatelogyCard>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {
                                this.props.isOnline ? this.props.navigate('detailScreen', {
                                    id: this.state.id[5],
                                    title: this.state.name[5]
                                }) : this.alert()
                            }}
                        >
                            <CatelogyCard
                                imageUri={this.state.imageSoure[5]}
                                name={this.state.name[5]}>
                            </CatelogyCard>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    name: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 15,
        fontWeight: '500',
        color: '#000'
    },
})
export default Catelory;