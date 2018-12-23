import React from 'react'
import { StyleSheet, View } from 'react-native'
import YouTube from 'react-native-youtube'

export default class Trailer extends React.Component {
    static navigationOptions = {
        headerTitle: 'Trailer',
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: '#000'
        },
        headerTitleStyle: {
            color: '#fff'
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <YouTube
                    videoId={this.props.navigation.state.params.key}
                    play={true}
                    fullscreen={true}
                    loop={false}
                    apiKey={'AIzaSyCl9XHwUD99LTaqpZ5h8Mz13hcBB5PgQes'}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ statuss: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    style={{ alignSelf: 'stretch', height: 300 }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
})