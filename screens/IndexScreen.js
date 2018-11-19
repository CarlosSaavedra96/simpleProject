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
                    <View style={{flex:1}}>
                        <View styles={ styles.imageContainer }>
                            <Image
                                source={ require('../assets/react-native-logo.png') }
                                style={ styles.image }
                            />
                        </View>
                        <View style={ styles.paragraphContainer }>
                            <Text style={ styles.paragraph }>sew gf
                          fdfd111iscing sd elidsdsddsdst, sed do eiusmod tempor incididunt ut ldsabore et dolore magna aliqsaua. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.
                            </Text>
                        </View>

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
        justifyContent: 'center',
    },
    image: {
        height: 100,
        width: 100,
    },
    imageContainer: {
        flex: 1,
    },
    paragraph:{
        fontSize: 20,
    },
    paragraphContainer: {
        flex: 1,
    },

});
