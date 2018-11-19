import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'expo';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.statusBar}></View>
                <View style={styles.container}>
                    <Text style={styles.title}>{ this.props.title }</Text>
                    <Icon.FontAwesome
                        name={'ellipsis-v'}
                        size={20}
                        style={styles.icon}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1
    },
    container: {
        backgroundColor: '#e6e6e6',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        flex: 20,
    },
    statusBar: {
        height: 25,
        backgroundColor: 'black'
    },
    icon: {
        flex: 1,
    }
});

