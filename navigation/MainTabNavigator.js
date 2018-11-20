import { createBottomTabNavigator } from 'react-navigation';
import IndexScreen from '../screens/IndexScreen';
import AboutScreen from '../screens/AboutScreen';
import FormScreen from '../containers/notes';
import MapScreen from '../screens/MapScreen';

export default createBottomTabNavigator({
    Index: {
        screen: IndexScreen,
        navigationOptions: {
            title: 'Index',
            tabBarLabel: 'Index',
        },
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
            title: 'Map',
            tabBarLabel: 'Map',
        },
    },
    Form: {
        screen: FormScreen,
        navigationOptions: {
            title: 'Form',
            tabBarLabel: 'Form',
        },
    },
    About: {
        screen: AboutScreen,
        navigationOptions: {
            title: 'About',
            tabBarLabel: 'About',
        },
    },
},{
    tabBarOptions: {
        labelStyle: {
            fontSize: 20,
            paddingBottom: 10,
            fontWeight: 'bold',
        },
    },
    initialRouteName: 'Index',
});
