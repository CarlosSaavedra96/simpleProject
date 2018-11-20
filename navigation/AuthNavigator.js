import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../containers/login';
import RegisterScreen from '../containers/register';

export default createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions:{
            header: null
        }
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: {
            header: null
        }
    },
},{
    initialRouteName: 'Login'
});
