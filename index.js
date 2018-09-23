/** @format */
import { Navigation } from 'react-native-navigation';
import { AppRegistry } from 'react-native';
import Login from './src/screens/Login';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => Login);
Navigation.registerComponent('Login', () => Login);
Navigation.registerComponent('Feed', () => Feed);

Navigation.startSingleScreenApp({
    screen: {
        screen: 'Login',
        title: 'Login',
    }
});
