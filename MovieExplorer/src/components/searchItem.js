import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

class SearchItem extends Component {

    render() {
        return (
            <TouchableOpacity style={{ marginTop: 5 }}
                onPress={() => this.props.navigate('detailScreen',
                    { id: this.props.id, title: this.props.name })}
            >
                <View style={styles.row}>
                    <View style={{ flex: 3 }}>
                        <Image source={{ uri: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2' + this.props.imageUri }}
                            style={styles.image} />
                    </View>
                    <View style={{ flex: 10, padding: 10 }}>
                        <Text style={styles.title}>{this.props.name}</Text>
                        <Text style={styles.date}>{this.props.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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
    row: {
        flexDirection: 'row',
        height: 130
    },
    image: {
        height: 130
    },
    title: {
        fontSize: 20
    },
    date: {
        fontSize: 14
    }
})
export default SearchItem;