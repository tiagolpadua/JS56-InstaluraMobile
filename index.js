/*
import { AppRegistry } from "react-native";
import Login from "./src/screens/Login";
AppRegistry.registerComponent("InstaluraMobile", () => Login);
*/

/*
import { Navigation } from "react-native-navigation";
import { AsyncStorage } from "react-native";
import Feed from "./src/components/Feed";
import Login from "./src/screens/Login";

Navigation.registerComponent("Login", () => Login);
Navigation.registerComponent("Feed", () => Feed);

AsyncStorage.getItem("token")
  .then(token => {
    if (token) {
      return {
        screen: "Feed",
        title: "Instalura"
      };
    }
    return {
      screen: "Login",
      title: "Login"
    };
  })
  .then(screen => Navigation.startSingleScreenApp({ screen }));

  */

import { Navigation } from "react-native-navigation";
import Login from "./src/screens/Login";

Navigation.registerComponent(
  `navigation.playground.WelcomeScreen`,
  () => Login
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: "navigation.playground.WelcomeScreen"
      }
    }
  });
});
