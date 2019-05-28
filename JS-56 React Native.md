# JS-56 React Native

## Cronograma

- Dia 1: Capítulo 1
- Dia 2: Capítulo 2, 3 e 4
- Dia 3: Capítulo 5 e 6
- Dia 4: Capítulo 7
- Dia 5: Capítulo 8 e 9
- Dia 6: Capítulo 10 e 11
- Dia 7: Capítulo 12
- Dia 8: Capítulo 13 e 14

## Montagem de Ambiente

- Node / NPM

```bash
> node --version
> npm --version
```

- Android Studio com Emulador

- React Native CLI

```bash
> npm install -g react-native-cli
> react-native --version
```

- Java

### Variáveis de ambiente

- Linux / macOS

Editar o arquivo: `$HOME/.bash_profile`

Por exemplo:

```bash
# macOS
> open -t ~/.bash_profile
# Linux
> gedit ~/.bash_profile
```

Incluir as linhas abaixo ajustando para o seu SO:

```bash
export JAVA_HOME=/<caminho-do-seu-computador>/jdk1.8.0_181
export PATH=$PATH:/<caminho-do-seu-computador>/jdk1.8.0_181/bin
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

### Emulador via linha de comando

```bash
emulator -list-avds
emulator -avd Nexus_5X_API_28
emulator -avd Nexus_5X_API_28 -no-snapshot-load
emulator -avd Nexus_5X_API_28 -no-snapshot-load -gpu guest
```

### adb via linha de comando

<https://devhints.io/adb>

```bash
adb devices -l
adb logcat
adb shell input text "RR" # Recarrega a tela do celular físico
```

### react-native

```bash
react-native init <Projeto>
react-native start
react-native run-android
react-native run-android --deviceId=DEVICE_ID
```

### Troubleshotting

```bash
cd android
gradlew.bat clean
```

#### ENOSPC

<https://github.com/facebook/jest/issues/3254>

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

#### KVM

<http://nmp90.com/2018/04/dev-kvm-permission-denied-ubuntu-18-04/>

```bash
sudo apt install qemu-kvm
sudo adduser $USER kvm
```

### Teste do ambiente - Olá Mundo

```bash
> react-native init OlaMundo
> emulator -avd Nexus_5_API_28
> cd OlaMundo
> react-native start
> react-native run-android
```

## Dia 1

### Introdução - O que é React e React Native

- Interfaces visuais complexas
- Necessidade de atualizar a view
- Mudanças com efeitos em cascata
- Código difícil de se prever
- A primeira alternativa é atualizar toda a view - (data) => view - problema de performance - flicker na tela - estratégia ineficente
- JSX
- Virtual DOM
- Warnings que auxiliam o desenvolvedor
- Transforma a API imperativa do DOM em uma declarativa
- A principal vantagem do React é em como vc estrutura seu código
- Componentes são a estrutura fundamental das aplicações
- Componentes são criados de maneira declarativa no React, e isso o diferencia dos demais frameworks
- Nativo vs Webview
- Pontos negativos do webview - paralelização de código - gestos - dispositivos nativos
- Ambiente nativo é mais poderoso que o da web
- Ambiente nativo é mais hostil
- Dois conjuntos de desenvolvedores, um para cada dispositivo
- Mas as interfaces nativas complexas acabam caindo no mesmo problema da web, problemas de complexidade
- React é adequado para qualquer sistema de view
- Sem HTML, sem WebView, sem Browser mas com todo controle em JS
- Componentes primitivos: <div> -> <View>, <span> -> <Text>, <img> -> <Image>
- A maior parte do código pode ser compartilhada, mas cada plataforma tem características específicas
- Melhor da web e o melhor do nativo
- 3 pilares: Gestos, componentes nativos, estilo e layout
- Não há transpilação
- Reimplementação de uma parte do css
- Reimplementação do flexbox
- ES6

React (também conhecido como React.js ou ReactJS) é uma biblioteca JavaScript para criar interfaces com o usuário. É mantida pelo Facebook e por uma comunidade de desenvolvedores e empresas individuais.

O React pode ser usado como base no desenvolvimento de aplicativos SPAs ou móveis.

### História

O React foi criado no Facebook. Ele foi influenciado pelo XHP, uma estrutura de componentes HTML para PHP. Ele foi usado pela primeira vez no feed de notícias do Facebook em 2011 e, mais tarde, no Instagram.com em 2012. O código foi aberto em maio de 2013.

O React Native, que permite o desenvolvimento nativo de Android e iOS com o React, foi anunciado no conferência de React.js do Facebook em fevereiro de 2015 e de código aberto em março de 2015.

### Declarative

Reaja facilita criar UIs interativas. Crie views simples para cada estado em seu aplicativo e o React atualizará e renderizará com eficiência os componentes corretos quando os dados forem alterados.

As views declarativas tornam seu código mais previsível e mais fácil de depurar.

### Component-Based

Crie componentes encapsulados que gerenciam seu próprio estado e, em seguida, componha-os para criar interfaces de usuário complexas.

Como a lógica do componente é escrita em JavaScript em vez de modelos, você pode facilmente passar dados avançados por meio do seu aplicativo e manter o estado fora do DOM.

### React Native

- Crie aplicativos móveis nativos usando JavaScript e React

  - O React Native permite que você crie aplicativos móveis usando apenas JavaScript.
  - Ele usa o mesmo design que o React, permitindo compor uma rica interface de usuário móvel a partir de componentes declarativos.

- Um aplicativo React Native é um aplicativo móvel real
  - Com o React Native, você não cria um "aplicativo da Web para dispositivos móveis", um "aplicativo HTML5" ou um "aplicativo híbrido". Você cria um aplicativo móvel real que é indistinguível de um aplicativo criado usando o Objective-C ou o Java. O React Native usa os mesmos blocos de construção fundamentais da interface do usuário dos aplicativos iOS e Android comuns. Você apenas colocaos blocos de construção juntos usando JavaScript e React

### Híbrido vs Nativo

### Diagrama

![Diagrama](https://i.imgur.com/QWejiTb.png)

- O código da regra de negócio em JS é o mesmo para qualquer plataforma

### EXPO vs React Native CLI

Se você estiver vindo de um plano de fundo da Web, a maneira mais fácil de começar a usar o React Native é com as ferramentas Expo, pois elas permitem que você inicie um projeto sem instalar e configurar o Xcode ou o Android Studio. O Expo CLI configura um ambiente de desenvolvimento em sua máquina local e você pode criar um aplicativo React Native em minutos. Para um desenvolvimento instantâneo, você pode usar o Snack para experimentar React Native out diretamente no seu navegador.

Se você estiver familiarizado com o desenvolvimento nativo, provavelmente desejará usar o React Native CLI. Requer o Xcode ou o Android Studio para começar. Se você já tiver uma dessas ferramentas instaladas, poderá colocá-la em funcionamento em alguns minutos. Se eles não estiverem instalados, você deve esperar gastar cerca de uma hora instalando e configurando-os.

### Hello World

```jsx
import React, { Component } from "react";
import { AppRegistry, Text } from "react-native";

export default class HelloWorldApp extends Component {
  render() {
    return <Text>Hello world!</Text>;
  }
}

AppRegistry.registerComponent("HelloWorld", () => HelloWorldApp);

// AppRegistry is the JS entry point to running all React Native apps. App root components should register themselves with AppRegistry.registerComponent, then the native system can load the bundle for the app and then actually run the app when it's ready by invoking AppRegistry.runApplication.

// The ReactJS code can also be imported into another component with the following code:

import HelloWorldApp from "./HelloWorldApp";
```

## Cap 1 - PREPARANDO O AMBIENTE

Explicar e testar cada um dos elementos

- Node/NPM para compilar o JSX

```bash
> node --version
> npm --version
```

- Watchman para observar os arquivos (não precisa no Linux)

- React Native CLI

```bash
> react-native --version
```

- IOS

  - XCode para compilar para IOS

- Android

  - Java: java -version
  - Android Studio + Android SDK
  - Emulador Android

- Create React App -> <https://github.com/react-community/create-react-native-app/issues/516>
  <https://facebook.github.io/react-native/blog/2017/03/13/introducing-create-react-native-app>

Exercícios:

- Abrir o SDK Manager
- ? Criar AVD
- Executar AVD via android studio
- emulador via linha de comandos:

```bash
emulator -list-avds
emulator -avd Nexus_5X_API_28
```

- Conectar o próprio celular

### Modo de depuração USB

<https://www.androidpit.com.br/como-ativar-depuracao-usb-android>

A opção de depuração USB permite a comunicação avançada com um dispositivo. Ao conectá-lo ao PC, podemos utilizar programas que vão interagir em profundidade com o computador, permitindo-nos instalar aplicativos, ler informações do sistema e habilitar as permissões de root.

Tradicionalmente, o desenvolvimento de aplicativos no Android é feito com o Android Studio em um computador. Contudo, para testar o aplicativo é preciso pasá-lo para um dispositivo, onde o código é executado.

Aqui é onde entra a opção de depuração USB. Com ela podemos conectar o smartphone com o computador, através de um cabo USB e testar o aplicativo que está sendo desenvolvido.

A depuração USB está destinada a conectar e compartilhar informações entre um smartphone e um computador. As ferramentas usadas para isso é o ADB (Android Debug Bridge) para a maioria dos smartphones, ou programas específicos segundo a fabricante, como por exemplo o Odin para os dispositivos da Samsung.

<https://www.techtudo.com.br/dicas-e-tutoriais/noticia/2014/10/como-ativar-o-modo-desenvolvedor-no-android.html>

Passo 1. Acesse as configurações do Android, deslize a tela até o fim e toque em "Sobre o dispositivo".

Passo 2. No fim da tela, toque rapidamente sete vezes seguidas sobre "Número da versão". Faça isso até ver a mensagem "Você agora é um desenvolvedor".

Passo 3. Voltando à tela principal de configurações, um novo menu chamado "Programador" estará disponível. Abra para ativar ou desativar as ferramentas de desenvolvedor.

```bash
adb devices -l
adb logcat
```

CTRL+M para ativar o Live Reload

Explicar a diferença de Live Reload e Hot Reload

### E pra rodar no IOS?

Pra executar em um IOS só se vc tiver um MAC, a única outra opção é usando o app expo se a aplicação for desenvolvida usando o create-react-native-app, mas isso é outra história...

## Capítulo 2

2.1 CRIANDO O PROJETO E CONHECENDO O PRIMEIRO CÓDIGO

````bash
> react-native init InstaluraMobile
> cd InstaluraMobile/ && react-native start
> react-native run-android
```

Abrir no vscode e navegar pela estrutura do projeto

Recursos:

<https://s3.amazonaws.com/caelum-online-public/636-react-native-1/resources.zip>
<http://bit.ly/js56rn>

- Instalar o eslint e o prettier no projeto:

<https://gist.github.com/tiagolpadua/6d1003b2f3930b5487bff4c1c1975ee0>
<http://bit.ly/js-56-plugins>


```bash
npm install eslint babel-eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier
````

- Criar o arquivo `.eslintrc` na raiz do projeto

```json
{
  "extends": ["airbnb", "prettier", "prettier/react"],
  "parser": "babel-eslint",
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "no-use-before-define": "off",
    "react/prop-types": "off",
    "comma-dangle": "off",
    "react/prefer-stateless-function": "off",
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100
      }
    ]
  },
  "globals": {
    "fetch": false
  },
  "plugins": ["prettier"]
}
```

- Criar o arquivo `.editorconfig`:

```prop
root = true
[*]
charset = utf-8
end_of_line = lf
indent_size = 2
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
```

- Instalar o plugin do eslint e do prettier no VSCode;

- Configurar o VSCode para formatar ao salvar:

File -> Prefferences -> Settings -> Folder Settings -> {}

```prop
"settings": {
  // other settings
  // formatting using eslint
  // let editor format using prettier for all other files
  "editor.formatOnSave": true,
  // disable editor formatting, so eslint can handle it
  "[javascript]": {
    "editor.formatOnSave": false
  },
  // available through eslint plugin in vscode
  "eslint.autoFixOnSave": true,
  "eslint.alwaysShowStatus": true,
  "javascript.validate.enable": false
}
```

2.2 PARA SABER MAIS: NOVO TEMPLATE DE PROJETO

## Exercício 2.3

- 3 Menu do desenvolvedor em dispositivo físico: Balançar o telefone, emulador é CTRL+M

- 4 Faltou registrar o componente:

```js
AppRegistry.registerComponent("InstaluraMobile", () => App);
```

É necessário registrar o componente principal através de `AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);`, por onde o carregamento do bundle js da app será iniciado. Só assim a app pode invocar `runApplication` com sucesso.

---

## Capítulo 3

### CONSTRUINDO O FEED DO INSTALURA

- Começar a construir o feed
- Apresentar uma foto e o nome do usuário que a publicou na app

```jsx
import React, { Component } from "react";
import { Text, View, Dimensions, Image } from "react-native";

const width = Dimensions.get("screen").width;

export default class Feed extends Component {
  render() {
    const fotos = [
      { id: 1, usuario: "rafael" },
      { id: 2, usuario: "alberto" },
      { id: 3, usuario: "vitor" }
    ];
    return (
      <View>
        {fotos.map(foto => (
          <View key={foto.id}>
            <Text>{foto.usuario}</Text>
            <Image
              source={require("./alura.png")}
              style={{ width: width, height: width }}
            />
          </View>
        ))}
      </View>
    );
  }
}
```

- Image <https://facebook.github.io/react-native/docs/images>
- Dimensions <https://facebook.github.io/react-native/docs/dimensions>
- map

Scroll não funciona...

View -> ScrollView

Debate ScrollView vs Flatlist

Trocar map por flatlist - <https://facebook.github.io/react-native/docs/flatlist>

```jsx
<FlatList
  style={{ marginTop: 20 }}
  keyExtractor={item => item.id}
  data={fotos}
  renderItem={({ item }) => (
    <View>
      <Text>{item.usuario}</Text>
      <Image
        source={require("../../resources/img/alura.png")}
        style={{ width: width, height: width }}
      />
    </View>
  )}
/>
```

Failed child context type: Invalid child context `virtualizedCell.cellKey` of type `number` supplied to `CellRenderer`, expected `string`

https://github.com/facebook/react-native/issues/18291

Ex opcional 3.4

O mapeamento precisa retornar a definição de **um** componente, e mapeamos cada foto para um `_<Text>_` e um `_<Image>_`. Envolver os elementos adjacentes por uma `_<View>_` resolve o problema.

## Capítulo 4

### 4.1 MELHORANDO O LAYOUT DOS POSTS

4-0

Vamos começar já apresentando além do texto com nome do usuário, uma imagem como foto de
perfil do usuário que fez a publicação numa espécie de cabeçalho do post. Vamos usar por enquanto a
mesma imagem base, mudando apenas as propriedade de estilo:

```jsx
return (
  <FlatList
    style={{ marginTop: 20 }}
    keyExtractor={item => item.id + ""}
    data={fotos}
    renderItem={({ item }) => (
      <View>
        <View>
          <Image
            source={require("../../resources/img/alura.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text>{item.usuario}</Text>
        </View>
        <Image
          source={require("../../resources/img/alura.png")}
          style={{ width: width, height: width }}
        />
      </View>
    )}
  />
);
```

4-1

Ajustar a direção do texto:

<https://facebook.github.io/react-native/docs/flexbox>

```jsx
return (
  <FlatList
    style={{ marginTop: 20 }}
    keyExtractor={item => item.id + ""}
    data={fotos}
    renderItem={({ item }) => (
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../resources/img/alura.png")}
            style={{ width: 40, height: 40 }}
          />
          <Text>{item.usuario}</Text>
        </View>
        <Image
          source={require("../../resources/img/alura.png")}
          style={{ width: width, height: width }}
        />
      </View>
    )}
  />
);
```

4-2

Melhorar a exibição da foto de perfil

```jsx
return (
  <FlatList
    style={{ marginTop: 20 }}
    keyExtractor={item => item.id + ""}
    data={fotos}
    renderItem={({ item }) => (
      <View>
        <View
          style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
        >
          <Image
            source={require("../../resources/img/alura.png")}
            style={{ marginRight: 10, borderRadius: 20, width: 40, height: 40 }}
          />
          <Text>{item.usuario}</Text>
        </View>
        <Image
          source={require("../../resources/img/alura.png")}
          style={{ width: width, height: width }}
        />
      </View>
    )}
  />
);
```

4-3

Criando stylesheets para isolar o código dos estilos

```jsx
export default class Feed extends Component {
  render() {
    const fotos = [
      { id: 1, usuario: "rafael" },
      { id: 2, usuario: "alberto" },
      { id: 3, usuario: "vitor" }
    ];
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id + ""}
        data={fotos}
        renderItem={({ item }) => (
          <View>
            <View style={styles.cabecalho}>
              <Image
                source={require("../../resources/img/alura.png")}
                style={styles.fotoDePerfil}
              />
              <Text>{item.usuario}</Text>
            </View>
            <Image
              source={require("../../resources/img/alura.png")}
              style={styles.foto}
            />
          </View>
        )}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  cabecalho: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width
  }
});
```

4.2 ESCREVENDO NOSSOS PRÓPRIOS COMPONENTES

Já começamos a pensar no layout e estilo da nossa aplicação. Agora é hora de pensar na divisão do
nosso código.

Separar melhor nossos componentes na aplicação, criando a classe Post , isolando essa complexidade a mais em um componente específico e reutilizável.

Post.js

```jsx
import React, { Component } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const width = Dimensions.get("screen").width;

export default class Post extends Component {
  render() {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image
            source={require("../../resources/img/alura.png")}
            style={styles.fotoDePerfil}
          />
          <Text>{item.usuario}</Text>
        </View>
        <Image
          source={require("../../resources/img/alura.png")}
          style={styles.foto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width
  }
});
```

Erro: Falta passar 'item' como argumento

4-5

Passando o 'item' como argumento 'foto' para o 'post'

<https://reactjs.org/docs/components-and-props.html>

Feed.js

```jsx
return (
  <FlatList
    style={styles.container}
    keyExtractor={item => item.id + ""}
    data={fotos}
    renderItem={({ item }) => <Post foto={item} />}
  />
);
```

Post.js

```jsx
return (
  <View>
    <View style={styles.cabecalho}>
      <Image
        source={require("../../resources/img/alura.png")}
        style={styles.fotoDePerfil}
      />
      <Text>{this.props.foto.usuario}</Text>
    </View>
    <Image
      source={require("../../resources/img/alura.png")}
      style={styles.foto}
    />
  </View>
);
```

Dividir a app em componentes mais simples e com pequenas responsabilidades é palavra de ordem,
principalmente usando React, que já nos traz muita facilidades para isso. Nesse ponto já
conseguimos perceber como cada componente fica mais legível, com complexidade reduzida e
como ganhamos possibilidades de reutilização dos mesmos.

4.3 INTEGRANDO COM A API DO INSTALURA

Passando de dados fixos para acesso a uma API

<https://instalura-api.herokuapp.com/api/public/fotos/rafael>

4-6

<https://reactjs.org/docs/state-and-lifecycle.html>

```jsx
export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      fotos: []
    };
  }
  render() {
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => item.id}
        data={this.state.fotos}
        renderItem={({ item }) => <Post foto={item} />}
      />
    );
  }
}
```

Mas agora a lista aparece vazia

Carregando a lista através de uma API

4-7

```jsx
componentDidMount() {
  fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
    .then(resposta => resposta.json())
    .then(json => this.setState({ fotos: json }));
}
```

Aqui usamos a Fetch API do JavaScript para disparar nossa requisição e planejar qual tratamento
será feito quando a resposta for recebida. O JSON retornado pela API já contém uma lista de todas as
fotos de um usuário, e quando ele for recebido, atualizamos o estado do componente disparando uma
nova renderização do nosso feed através da chamada ao setState .

4-8

Mas as fotos continuam estáticas e o nome do usuário não aparece

```jsx
export default class Post extends Component {
  render() {
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image
            source={{ uri: this.props.foto.urlPerfil }}
            style={styles.fotoDePerfil}
          />
          <Text>{this.props.foto.loginUsuario}</Text>
        </View>
        <Image source={{ uri: this.props.foto.urlFoto }} style={styles.foto} />
      </View>
    );
  }
}
```

4.4 EXERCÍCIOS: ESTILOS, COMPONENTES CUSTOMIZADOS E INTEGRAÇÃO COM A API

Exercicio opcional 8

```jsx
<Text style={[styles.titulo, styles.tituloAtivo]}>{titulo}</Text>
```

<https://blog.rocketseat.com.br/react-do-zero-ciclo-de-vida-stateless-components-e-arquitetura-flux/>

## Cap 5 - CURTINDO E DESCURTINDO FOTOS NO FEED

### 5.1 COMEÇANDO COM A IMPLEMENTAÇÃO DAS CURTIDAS]

Começaremos implementando a funcionalidade de curtir/descurtir fotos.

5-0

- Passa o props para um state
- object destructor - http://exploringjs.com/es6/ch_destructuring.html

Post.js

```jsx
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: this.props.foto
    };
  }
  render() {
    const { foto } = this.state;
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={{ uri: foto.urlPerfil }} style={styles.fotoDePerfil} />
          <Text>{foto.loginUsuario}</Text>
        </View>
        <Image source={{ uri: foto.urlFoto }} style={styles.foto} />
      </View>
    );
  }
}
```

- Incluir o botão de curtir/descurtir

5-1

```jsx
render() {
    const { foto } = this.state;
    return (
        <View>
            <View style={styles.cabecalho}>
                <Image source={{ uri: foto.urlPerfil }}
                    style={styles.fotoDePerfil} />
                <Text>{foto.loginUsuario}</Text>
            </View>
            <Image source={{ uri: foto.urlFoto }}
                style={styles.foto} />

            <View style={styles.rodape}>
                <Image style={styles.botaoDeLike}
                    source={require('../../resources/img/s2.png')} />
            </View>
        </View>
    );
```

5-2

O botão não é clicável, vamos utilizar o touchable opacity:

Post.js

```jsx
<View style={styles.rodape}>
  <TouchableOpacity
    onPress={() => console.warn("Touchable Opacity respondendo!")}
  >
    <Image
      style={styles.botaoDeLike}
      source={require("../../resources/img/s2.png")}
    />
  </TouchableOpacity>
</View>
```

5-3

Vamos trocar a imagem do like se a foto estiver likeada

```jsx
<View style={styles.rodape}>
  <TouchableOpacity
    onPress={() => console.warn("Touchable Opacity respondendo!")}
  >
    <Image
      style={styles.botaoDeLike}
      source={
        foto.likeada
          ? require("../../resources/img/s2-checked.png")
          : require("../../resources/img/s2.png")
      }
    />
  </TouchableOpacity>
</View>
```

mas ainda não há o efeito desejado

5-4

Para melhorar o código vamos separar em funções:

- setState

```jsx
export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foto: this.props.foto
    };
  }

  carregaIcone(likeada) {
    return likeada
      ? require("../../resources/img/s2-checked.png")
      : require("../../resources/img/s2.png");
  }

  like = () => {
    const fotoAtualizada = {
      ...this.state.foto,
      likeada: !this.state.foto.likeada
    };
    this.setState({ foto: fotoAtualizada });
  };

  render() {
    const { foto } = this.state;
    return (
      <View>
        <View style={styles.cabecalho}>
          <Image source={{ uri: foto.urlPerfil }} style={styles.fotoDePerfil} />
          <Text>{foto.loginUsuario}</Text>
        </View>
        <Image source={{ uri: foto.urlFoto }} style={styles.foto} />
        <View style={styles.rodape}>
          <TouchableOpacity onPress={this.like}>
            <Image
              style={styles.botaoDeLike}
              source={this.carregaIcone(foto.likeada)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40,
    height: 40
  },
  foto: {
    width: width,
    height: width
  },
  rodape: {
    margin: 10
  },
  botaoDeLike: {
    height: 40,
    width: 40
  }
});
```

### 5.2 EXIBINDO CONTEÚDO CONDICIONALMENTE

Implementaremos o número de curtidas de cada foto, inicialmente fixo

ex5-5

```jsx
<Text style={styles.likes}>2 curtidas</Text>
```

Pegando a qtd de likes da api

ex5-6

```jsx
<Text style={styles.likes}>
  {foto.likers.length} {foto.likers.length > 1 ? "curtidas" : "curtida"}
</Text>
```

Exibição condicional de componente de curtidas só de já houver curtida

```jsx
{
  foto.likers.length > 0 ? (
    <Text style={styles.likes}>
      {foto.likers.length} {foto.likers.length > 1 ? "curtidas" : "curtida"}
    </Text>
  ) : null;
}
```

5-7

Passando a lógica de exibição para uma função:

```jsx
exibeLikes(likers) {
    if (likers.length <= 0)
        return;
    return (
        <Text style={styles.likes}>
            {foto.likers.length} {foto.likers.length > 1 ? 'curtidas' : 'curtida'}
        </Text>
    );
}

render() {
    const { foto } = this.state;
    return (
        <View>
            <View style={styles.cabecalho}>
                <Image source={{ uri: foto.urlPerfil }}
                    style={styles.fotoDePerfil} />
                <Text>{foto.loginUsuario}</Text>
            </View>
            <Image source={{ uri: foto.urlFoto }}
                style={styles.foto} />
            <View style={styles.rodape}>
                <TouchableOpacity onPress={this.like}>
                    <Image style={styles.botaoDeLike}
                        source={this.carregaIcone(foto.likeada)} />
                </TouchableOpacity>
            </View>
            {this.exibeLikes(foto.likers)}
        </View>
    );
}
```

5-8

Exibindo a legenda da foto

```jsx
<View style={styles.comentario}>
  <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
  <Text>{foto.comentario}</Text>
</View>
```

5.3 ALTERANDO O NÚMERO DE CURTIDAS DINAMICAMENTE

???

5-9
filtrando a lista para retirar o nome do usuário atual da lista de likes

```jsx
like = () => {
  let novaLista = [];
  if (!this.state.foto.likeada) {
    novaLista = this.state.foto.likers.concat({ login: "meuUsuario" });
  } else {
    novaLista = this.state.foto.likers.filter(liker => {
      return liker.login !== "meuUsuario";
    });
  }
  const fotoAtualizada = {
    ...this.state.foto,
    likeada: !this.state.foto.likeada,
    likers: novaLista
  };
  this.setState({ foto: fotoAtualizada });
};
```

5-10

Organizando o código:

```jsx
like = () => {
  const { foto } = this.state;
  let novaLista = [];
  if (!foto.likeada) {
    novaLista = [...foto.likers, { login: "meuUsuario" }];
  } else {
    novaLista = foto.likers.filter(liker => {
      return liker.login !== "meuUsuario";
    });
  }
  const fotoAtualizada = {
    ...foto,
    likeada: !foto.likeada,
    likers: novaLista
  };
  this.setState({ foto: fotoAtualizada });
};
```

Excercícios 5.4

Resposta 8 opcional
O código funciona porque no JavaScript `true && expression` sempre resulta na expression, e `false && expression` sempre resulta em `false`, portanto, se a condição for verdadeira, o elemento depois de `&&` será retornado, e se for falsa, o React simplesmente a ignora.

## CAPÍTULO 6 - ADICIONANDO NOVOS COMENTÁRIOS A UMA FOTO

### 6.1 EXIBINDO OS COMENTÁRIOS

6-1

criar um comentário fixo:
this.props.foto.comentarios = [{id: '78787',texto: 'um comentário', login: 'um usuário'}];

Exibindo os comentários já existentes

```jsx
render() {
    const { foto } = this.state;
    return (
        <View>
            <View style={styles.cabecalho}>
                <Image source={{ uri: foto.urlPerfil }}
                    style={styles.fotoDePerfil} />
                <Text>{foto.loginUsuario}</Text>
            </View>
            <Image source={{ uri: foto.urlFoto }}
                style={styles.foto} />
            <View style={styles.rodape}>
                <TouchableOpacity onPress={this.like}>
                    <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
                </TouchableOpacity>
            </View>
            {this.exibeLikes(foto)}
            {this.exibeLegenda(foto)}
            {foto.comentarios.map(comentario =>
                <View>
                    <Text>{comentario.login}</Text>
                    <Text>{comentario.texto}</Text>
                </View>
            )}
        </View>
    );
}
```

6-2

Criar chave para cada elemento:

```jsx
{
  foto.comentarios.map(comentario => (
    <View key={comentario.id}>
      <Text>{comentario.login}</Text>
      <Text>{comentario.texto}</Text>
    </View>
  ));
}
```

cap 6.0

Adicionando estilos:

```jsx
{
  foto.comentarios.map(comentario => (
    <View style={styles.comentario} key={comentario.id}>
      <Text style={styles.tituloComentario}>{comentario.login}</Text>
      <Text>{comentario.texto}</Text>
    </View>
  ));
}
```

---

## 6.2 DEFININDO NOSSO CAMPO DE TEXTO

- Cadastrar novos comentários

- Inclui um campo de texto para digitação do comentário

- Incluir icone de enviar comentário

- Alinhando o botão de envio com o texto do comentário

- Ajustando a propocao do input com o botão com flex

- Só o flexbox tem um curso específico: https://www.alura.com.br/curso-online-posicione-elementos-com-flexbox

## 6.3 IMPLEMENTANDO ADIÇÃO DE COMENTÁRIOS

- Deixando o botão de envio clicável

- Método para tratar o evento de click na imagem

- Ocorre erro no input de undefined pois a referência ao elemento é nula

- Para conseguir trabalhar com os caracteres inseridos pelo usuário usamos o callback passado para a propriedade onChangeText do TextInput.

- Agora que já conseguimos acesso ao texto, vamos implementar de fato a adição de comentários.

---

## 6.4 EXERCÍCIOS: ADICIONANDO NOVOS COMENTÁRIOS A UMA FOTO

---

# CAPÍTULO 7 DIVIDINDO CONTAINER E PRESENTATIONAL COMPONENTS

## 7.1 AJUSTANDO COMPORTAMENTO NO ANDROID

- Se estivéssemos rodando a aplicação localmente teríamos que usar o ip de nossa máquina local e não localhost pois localhost é o próprio emulador

- É possível realizar alterações que reflitam somente em uma plataforma específica

(; no fim da linha marginTop: Platform.OS == 'ios' ? 20 : 0; está errado)

https://facebook.github.io/react-native/docs/platform-specific-code

## 7.2 DIVIDINDO EM COMPONENTES MENORES

- Analisar código atual

- Isolamento de responsabilidades

- Informações atualizadas nas camadas inferiores não atualizam a camada superior

- Criar o InputComentario

- Não funciona pois a função adicionaComentario não existe em InputComentario

- Passar via parâmetro comentarioCallback

- Mas agora o problema é que a função altera o state a partir de um input que não está mais em post

- Remover os this.state que estão sendo usados em adicionaComentario

- Adiciona comentário receberá estes valores por parâmetro

- mas o código abaixo está errado pq executa a função no momento do bind:

<TouchableOpacity onPress={
this.props.comentarioCallback(this.state.valorComentario, this.inputComentario)
}>

- Devemos converter em uma arrow function

Com a divisão do código entre Post e InputComentário conseguimos perceber que o
componente menor apenas isolou o código de apresentação do componente de input customizado,
mas o Post continua concentrando sua regra de negócio e o estado inerente à mesma. Classificamos
assim o InputComentario como um Presentational Component e o Post como um Container
Component, relembrando dos conceitos apresentados no curso de React.

## 7.3 IDENTIFICANDO MAIS PRESENTATIONAL COMPONENTS

- O próximo componente a ser refatorado é o de Post, primeiro extrairemos um componente de Likes
  <codigo>

## 7.4 EXERCÍCIOS: DIVIDINDO CONTAINER E PRESENTATIONAL COMPONENTS

---

# CAPÍTULO 8 EVOLUINDO NOSSA IMPLEMENTAÇÃO: MANTENDO ESTADO EM UM ÚNICO CONTAINER COMPONENT

O estado está sendo atualizado apenas nos componentes inferiores

Passar a lógica do Post para o Feed - Single Source of Truth

## 8.1 TRANSFERINDO A LÓGICA DE COMENTÁRIOS PARA O CONTAINER COMPONENT

bar ]

foo bar

revisao dia 5
Criando Tela de login
Enviando dados para autenticação
Armazenamento com asyncstorage
login/logout
Navegando entre telas - wix react navigation

revisao dia 6
Tela inicial se já estiver autenticado
Remoção do usuário fixo
Nova listagem das fotos autenticada
Like autenticado

revisao dia 7
Comentário autenticado
Isolando api em alurafetchservice
Notificação Android/IOS
Revertendo o estado em caso de falha de comunicação

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE4NDc2MzMzNjIsLTIwNDY5Mzg5NzcsMT
kzODM1NTYzMCwtMTk5NjAwMzE3NiwtMTk1MjcwOTY5MywtOTIy
Njc1NiwxMDgyODg0NzczLC03MDU5NDIyODYsLTEyNjUyMzA3OT
gsLTE0OTk3OTM5MzUsLTMzNTgzNTExOCwtOTU4MTUwMjYyLDEy
NTMzODg3ODEsLTEzMDgwNjQ1MzcsLTEwOTAzNTIxNzIsNTM3NT
kwMTg5LC0yMTM4NzQ1NzM2LDEyMjkwMjYyM119
-->

Mario Souto (Soutinho) [10:30 PM]
Opa única coisa que deu ruim no cursp
Foi a lib de navegação
A gente trocou pra usar a React Navigation
https://github.com/CaelumAulas/rn-android8039

Tiago Lage Payne de Pádua [10:31 PM]
blz, lembrei agora q tinha isso msm vlw

Mario Souto (Soutinho) [10:31 PM]
Pode pegar o codigo aqui /o
E o AsyncStorage
Vc precisa instalar

\$ react-native log-android

Desestruturação de objetos

<http://bit.ly/jsdestruc>

React Native Life Cicle

<http://bit.ly/js56-rls>
