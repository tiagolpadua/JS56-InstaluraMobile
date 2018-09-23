/** @format */
import { Navigation } from 'react-native-navigation';
import { AsyncStorage } from 'react-native';
import Login from './src/components/Login';
import Feed from './src/components/Feed';

// AppRegistry.registerComponent(appName, () => Login);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Feed', () => Feed);

/*
Navigation.startSingleScreenApp({
    screen: {
        screen: 'Login',
        title: 'Login',
    }
});
*/

AsyncStorage.getItem('token')
    .then(token => {
        if (token) {
            return {
                screen: 'Feed',
                title: 'Instalura',
            };
        }
        return {
            screen: 'Login',
            title: 'Login',
        };
    })
    .then(screen => Navigation.startSingleScreenApp({ screen }));