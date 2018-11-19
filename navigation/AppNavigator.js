import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';

export default createSwitchNavigator({
    Login: LoginScreen,
    Register: RegisterScreen,
    Main: MainTabNavigator,
},{
    initialRouteName: 'Login'
});
