export default class InputComentario extends Component {
    constructor() {
        super();
        this.state = {
            valorComentario: '',
        }
    }
    render() {
        return (
            <View style={styles.novoComentario}>
                <TextInput style={styles.input}
                    placeholder="Adicione um comentário..."
                    ref={input => this.inputComentario = input}
                    onChangeText={texto => this.setState({ valorComentario: texto })}
                    underlineColorAndroid="transparent" />
                <TouchableOpacity onPress={
                    this.props.comentarioCallback(this.state.valorComentario, this.inputComentario)
                }>
                    <Image style={styles.icone}
                        source={require("../../resources/img/send.png")} />
                </TouchableOpacity>
            </View>
        );
    }
}