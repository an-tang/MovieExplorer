import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
} from 'react-native';

class MyCard extends Component {
    render() {
        return (
            <View style={{ height: 160, width: 120, marginLeft: 10, borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + this.props.imageUri }}
                        style={styles.image}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        alignSelf: 'stretch',
    },
})
export default MyCard;