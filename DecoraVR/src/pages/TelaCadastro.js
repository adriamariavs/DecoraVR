import { View, Text, TextInput } from 'react-native';
import { styles } from '../style/Styles';
import { useNavigation } from '@react-navigation/native';
// Importa componentes personalizados
import ButtonComponents from '../componentes/ButtonComponents';
import ImgComponent from '../componentes/ImgComponent';

export default function Cadastro() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TelaCds}>
        <ImgComponent
          styles={styles.ImgCds}
          imagem={require('../image/logotemporaria.png')}
        />
        <Text style={styles.WelcomeCds}>Cadastre-se!</Text>
        <Text style={styles.DescriCds}>Cadastre-se e aproveite todos os sabores</Text>
        <Text style={styles.DescriCds1}>inesquecíveis.</Text>

       {/* //Permite o usuario inserir o nome e transforma o nome em valor da const: nomeCompleto */}
        <TextInput
          style={styles.InputName}
          placeholder="Nome completo"
          value={nomeCompleto}
          onChangeText={setNomeCompleto}
        />
        {/* //Permite o usuario inserir o e-mail e transforma o e-mail em valor da const: email */}
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        {/* //Permite o usuario inserir a senha e transforma a senha em valor da const: senha */}
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        {/* //Permite o usuario confirmar a senha anterior e transforma a confirmação em valor da const: confirmarSenha */}
        <TextInput
          style={styles.InputName}
          placeholder="Repita sua senha"
          secureTextEntry={true}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
        />

        <ButtonComponents
          styles={[styles.BtnLogin, { marginTop: 60 }]}
          onPress={handleCadastro}
          title="Cadastre-se"
        />
      </View>
    </View>
  );
}