import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: navigator.geolocation.getCurrentPosition()
        }
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return(
            <View>
                <MapView
                    region={this.state.region}
                    onRegionChange={this.onRegionChange}
                />
            </View>
        );
    }
}
