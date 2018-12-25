import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

class DetailScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'About Us',
        headerTintColor: '#fff',
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle
    });
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Image style={styles.image} source={require('../image/ic_movie.png')} />
                    <Text style={styles.text}>Movie Explorer </Text>
                    <Text style={styles.subject}>A project for </Text>
                    <Text style={styles.subject}>Mobile Programming (SE346)</Text>
                    <Text style={styles.framework}>Built with ReactNative v0.57.0</Text>
                    <Text style={styles.ourteam}>Teacher:</Text>
                    <Text style={styles.name}>Huynh Tuan Anh</Text>
                    <Text style={styles.ourteam}>Our team:</Text>
                    <Text style={styles.name}>Tang Hoang An - ID: 16520020</Text>
                    <Text style={styles.name}>Dau Duc Viet Anh - ID: 16520029</Text>
                    <Text style={styles.name}>Tran Xuan Bac - ID: 16520069</Text>
                </View>
                <View style={styles.contactView}>
                    <Text style={styles.contact}>Contact us: antanghoang@gmail.com</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginTop: 15
    },
    title: {
        fontSize: 20,
        color: '#000'
    },
    text: {
        fontSize: 22,
        color: '#000',
        paddingTop: 4,
        marginBottom: 10,
    },
    subject: {
        fontSize: 16,
        color: '#CC0000'
    },
    ourteam: {
        fontSize: 16,
        color: '#000',
        marginTop: 25,
    },
    name: {
        fontSize: 16,
        color: '#000',
        marginTop: 3,
    },
    framework: {
        marginTop: 3
    },
    contactView: {
        flex: 0,
        position: 'relative',
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    contact: {
        marginBottom: 10
    }
});

export default DetailScreen;