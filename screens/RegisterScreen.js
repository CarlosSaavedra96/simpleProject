import React, { Component } from 'react';
import { View,
    TextInput,
    TouchableOpacity,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native';
import { Icon } from 'expo';

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
        };

        this.signinInit = this.signinInit.bind(this);
        this._handleSignup = this._handleSignup.bind(this);
    }

    signinInit() {
        this.props.signinInit();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.auth.loggedIn || nextProps.auth.loggedIn){
            this.props.navigation.navigate('Index');
        }
    }

    render() {
        return(
            <KeyboardAvoidingView style={ styles.container }>
                <View style={ styles.fieldsContainer }>
                    <Icon.FontAwesome
                        name={'user'}
                        size={26}
                        color={'black'}
                        style={ styles.icon }
                    />
                    <TextInput
                        placeholder={'Username'}
                        secureTextEntry={true}
                        style={ styles.textInput }
                        onChangeText={(username) => this.setState({username})}
                    />
                </View>
                <View style={ styles.fieldsContainer }>
                    <Icon.FontAwesome
                        name={'envelope'}
                        size={26}
                        color={'black'}
                        style={ styles.icon }
                    />
                    <TextInput
                        placeholder={'Email'}
                        style={ styles.textInput }
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>
                <View style={ styles.fieldsContainer }>
                    <Icon.FontAwesome
                        name={'lock'}
                        size={26}
                        color={'black'}
                        style={ styles.icon }
                    />
                    <TextInput
                        placeholder={'Password'}
                        secureTextEntry={true}
                        style={ styles.textInput }
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity
                        style={ styles.button }
                        onPress={ () => this.props.signinFetch(this.state.username, this.state.email, this.state.password)}
                    >
                        <Text style={ styles.buttonText }>
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity
                        style={ [styles.button, styles.signupButton] }
                        onPress={() => this.props.navigation.navigate('Login') }
                    >
                        <Text style={ styles.buttonText }>
                            Cancel
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }

    _handleSignup() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        padding: 50,
    },
    fieldsContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    textInput: {
        flex: 6,
        fontSize: 18,
        borderRadius: 5,
        backgroundColor: '#f2f2f2'
    },
    icon: {
        flex: 1
    },
    signupButton : {
        backgroundColor: '#ccd9ff',
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#809fff',
        elevation: 1,
        borderRadius: 5,
        height: 35,
        marginTop: 10,
        marginBottom: 10
    },
    buttonText: {
        textTransform: 'uppercase',
        fontSize: 20,
        color: '#fff',
    }
});
