import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default class AboutScreen extends Component {
    navigationOptions = {
        title:'About',
    };

    render() {
        return(
            <View style={ styles.container }>
                <Header title={ this.navigationOptions.title } />
                <View style={ styles.paragraph }>
                    <Text style={ styles.text }>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    paragraph: {
        flex: 10,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 35
    },
    text: {
        fontSize: 18
    }
});