import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import AppNavigator from './navigation/AppNavigator';
import Index from './screens/IndexScreen';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        }
    }

    componentDidMount() {

    }

  render() {
        // if (this.state.isReady) {
        //     return (
        //         <Provider>
        //             <AppNavigator />
        //         </Provider>
        //     );
        // } else {
        //     return (
        //         <AppLoading
        //
        //         />
        //     );
        // }
      return(
          <AppNavigator />
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
