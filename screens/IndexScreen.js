import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header';

export default class IndexScreen extends Component {
    navigationOptions = {
        title:'Index',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={ styles.container }>
                <Header title={ this.navigationOptions.title } />
                <View style={ styles.body }>
                    <View styles={ styles.imageContainer }>
                        <Image
                            source={ require('../assets/react-native-logo.png') }
                            style={ styles.image }
                        />
                    </View>
                    <View style={ styles.paragraphContainer }>
                        <Text style={ styles.paragraph }>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    body: {
        flex: 8,
        padding: 15,
        alignItems: 'center'
    },
    image: {
        height: 100,
        width: 100,
    },
    imageContainer: {
        flex: 1,
    },
    paragraph:{
        fontSize: 18,
    },
    paragraphContainer: {
        flex: 1,
    },

});
