import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Icon } from 'expo';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this._handleLogout = this._handleLogout.bind(this);
    }

    render() {
        return (
            <View style={styles.cont}>
                <View style={styles.statusBar}></View>
                <View style={styles.container}>
                    <Text style={styles.title}>{ this.props.title }</Text>
                    <TouchableHighlight
                        onPress={this._handleAlert}
                        style={styles.icon}
                    >
                        <Icon.FontAwesome
                            name={'ellipsis-v'}
                            size={20}
                            />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }

    _handleAlert() {
        Alert.alert('Alert', 
            'You are going to logout',
            [
                {text: 'Logout', onPress:() => this._handleLogout},
                {text: 'Cancel', style:'cancel'}
            ],
            {cancelable:false});
    }

    _handleLogout() {
        this.props.logoutFetch();
        if (!this.props.auth.loggedIn) {
            this.props.navigation.navigate('Login');
        }
    }
}

const styles = StyleSheet.create({
    cont: {
        flex: 1,
        marginBottom: 10
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
        flex: 2,
        alignItems: 'center'
    }
});

