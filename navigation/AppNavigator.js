import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../containers/login';
import RegisterScreen from '../containers/register';
import MainTabNavigator from '../navigation/MainTabNavigator';

export default createSwitchNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: MainTabNavigator,
},{
    initialRouteName: 'Login'
});
