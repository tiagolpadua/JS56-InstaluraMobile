import PropTypes from 'prop-types';
import React, { Component } from "react";
import { AsyncStorage, Button, Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { login, logout } from "../actions";

const width = Dimensions.get("screen").width;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      usuario: "rafael",
      senha: "123456",
      mensagem: ""
    };
  }

  logout() {
    AsyncStorage.removeItem("usuario");
    AsyncStorage.removeItem("token");
    // ir para a tela de logout
  }

  efetuaLogin = () => {
    console.warn('efetuaLogin');
    const uri = "https://instalura-api.herokuapp.com/api/public/login";
    const requestInfo = {
      method: "POST",
      body: JSON.stringify({
        login: this.state.usuario,
        senha: this.state.senha
      }),
      headers: new Headers({
        "Content-type": "application/json"
      })
    };
    fetch(uri, requestInfo)
      .then(response => {
        if (response.ok) return response.text();
        throw new Error("Não foi possível efetuar login");
      })
      .then(token => {
        this.props.login({ token, usuario: this.state.usuario });
        // AsyncStorage.setItem("token", token);
        // AsyncStorage.setItem("usuario", this.state.usuario);
        this.props.navigator.push({
            screen: 'Feed',
            title: 'Instalura'
        });
        this.props.navigator.resetTo({
          screen: "Feed",
          title: "Instalura"
        });
      })
      .catch(error => this.setState({ mensagem: error.message }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Instalura</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Usuário..."
            defaultValue={this.state.usuario}
            onChangeText={texto => this.setState({ usuario: texto })}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            placeholder="Senha..."
            defaultValue={this.state.senha}
            onChangeText={texto => this.setState({ senha: texto })}
          />
          <Button title="Login" onPress={this.efetuaLogin} />
        </View>
        <Text style={styles.mensagem}>{this.state.mensagem}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: width * 0.8
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 26
  },
  mensagem: {
    marginTop: 15,
    color: "#e74c3c"
  }
});

const mapStateToProps = state => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ login, logout }, dispatch);

Login.propTypes = {
  login: PropTypes.func,
  logout: PropTypes.func,
  navigator: PropTypes.object
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);


// export default Login;