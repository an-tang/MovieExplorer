import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SearchResults from '../components/searchResults.js';

export default class Search extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Search',
        headerTintColor: '#fff',
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
    });

    constructor() {
        super();
        this.state = {
            text: '',
            showComponent: false,
        };
        this.onIconClick = this.onIconClick.bind(this);
    }
    onIconClick() {
        if (this.state.text != '')
            this.setState({
                showComponent: true,
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={styles.textinput} placeholder='Type here...'
                        onChangeText={(text) => { this.setState({ text }); this.setState({ showComponent: false }) }}
                    />
                    <TouchableOpacity style={{ paddingHorizontal: 5 }}
                        onPress={this.onIconClick}
                    >
                        <Icon name='search' size={35} color={'#000'} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                {this.state.showComponent ?
                    <SearchResults name={this.state.text} navigate={navigate}
                        showComponent={this.state.showComponent} isOnline={this.state.isOnline} /> :
                    null
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textinput: {
        width: '85%',
        height: 50,
        fontSize: 20,
        fontWeight: '100',
        marginStart: 8,
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
    icon: {
        marginRight: 10,
        marginTop: 10,
    }
});
