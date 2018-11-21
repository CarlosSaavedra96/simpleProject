import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { MapView, ScreenOrientation } from 'expo';
import Header from '../containers/Header';

export default class MapScreen extends Component {
    navigationOptions = {
        title:'Map',
    };

    constructor(props) {
        super(props);

        this.state = Dimensions.get('window');

        this.handleOrientation = this.handleOrientation.bind(this);
    }

    componentWillMount() {
        Dimensions.addEventListener('change', this.handleOrientation);
    }

    componentDidMount() {
        ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
    }

    componentWillUnmount() {
        ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
        Dimensions.removeEventListener('change', this.handleOrientation);
    }

    handleOrientation(dims) {
        this.setState(dims.window);
    }

    render() {
        const {width, height} = this.state;
        let mapStyle = height > width ? styles.mapPortrait : styles.mapLandscape;
        return(
            <View style={ styles.container }>
                <Header title={ this.navigationOptions.title } />
                <MapView
                    style={ mapStyle }
                    initialRegion={{
                        latitude: 32.52375,
                        longitude: -117.01466,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapPortrait: {
        flex: 8
    },
    mapLandscape: {
        flex: 4
    }
});

