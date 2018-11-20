import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import { ScreenOrientation } from 'expo';
import Header from '../components/Header';

export default class MapScreen extends Component {
    navigationOptions = {
        title:'Map',
    };

    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }

    componentDidMount() {
        ScreenOrientation.allowAsync(ScreenOrientation.Orientation.ALL);
    }

    componentWillUnmount() {
        ScreenOrientation.allowAsync(ScreenOrientation.Orientation.PORTRAIT);
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return(
            <View>
                <Header title={ this.navigationOptions.title } />
                <MapView
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}
