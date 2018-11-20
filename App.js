import React from 'react';
import { persistStore } from 'redux-persist';
import { AppLoading, Asset } from 'expo';
import { Provider } from 'react-redux';
import store from './store';
import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        }
    }

    componentDidMount() {
        persistStore(store);
    }

  render() {
        if (this.state.isReady) {
            return (
                <Provider store={store}>
                    <AppNavigator />
                </Provider>
            );
        } else {
            return (
                <AppLoading
                    startAsync={ this.cacheResources }
                    onFinish={() => this.setState({isReady:true})}
                    onError={console.warn}
                />
            );
        }
  }

  async cacheResources() {
      const images = [
          require('./assets/react-native-logo.png')
      ];

      const cacheImages = images.map((image) => {
          return Asset.fromModule(image).downloadAsync();
      });
      return Promise.all(cacheImages);
  }

}
