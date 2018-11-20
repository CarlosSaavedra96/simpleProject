import { createSwitchNavigator } from 'react-navigation';
import LoginScreen from '../containers/login';
import RegisterScreen from '../containers/register';
import MainTabNavigator from './MainTabNavigator';
import AuthNavigator from './AuthNavigator';

export default createSwitchNavigator({
    Auth: AuthNavigator,
    Main: MainTabNavigator,
},{
    initialRouteName: 'Auth'
});
