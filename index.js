/** @format */
import { Navigation } from "react-native-navigation";
import { AsyncStorage } from "react-native";
import Login from "./src/components/Login";
import Feed from "./src/components/Feed";
import { Provider } from "react-redux";
import configureStore from "./src/configureStore";

const store = configureStore();

// AppRegistry.registerComponent(appName, () => Login);
Navigation.registerComponent("Login", () => Login, store, Provider);
Navigation.registerComponent("Feed", () => Feed, store, Provider);
Navigation.registerComponent("PerfilUsuario", () => Feed, store, Provider);

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
