import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../style/Styles';
import { useNavigation } from '@react-navigation/native';
// Importa componentes personalizados
import ButtonComponents from '../componentes/ButtonComponents';
import ImgComponent from '../componentes/ImgComponent';

export default function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TelaLogin}>
        {/* Exibe a imagem de login */}
        <ImgComponent styles={styles.ImgLogin} imagem={require('../image/logotemporaria.png')} />
        {/* Exibe a mensagem de boas-vindas */}
        <Text style={styles.Welcome}>Seja bem-vindo!</Text>
        {/* Exibe a descrição abaixo da mensagem de boas-vindas */}
        <Text style={styles.Descri}>Faça seu login e continue comprando.</Text>
        {/* Campo de entrada para o e-mail */}
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        {/* Campo de entrada para a senha */}
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />
        {/* Exibe o texto "Esqueceu sua senha?" */}
        <Text style={styles.Senha}>Esqueceu sua senha?</Text>
        {/* Botão de login que chama a função handleLogin quando pressionado */}
        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={handleLogin}
          title="Login"
        />
        {/* Exibe o texto "Não tem conta?" e um botão que navega para a tela de Cadastro */}
        <View style={styles.flexrow}>
          <Text style={styles.Cadas}>Não tem conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.Cadas1}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}