import { View, Text, TextInput } from "react-native"
import { styles } from "../Styles/styles";

export default function Cadastro() {
    return (
      <View style={styles.container}>
        <View style={styles.TelaLogin}>

        <Text style={styles.Welcome}>Seja bem-vindo!</Text>
  
  <TextInput style={styles.InputName} placeholder="Nome completo" />
  <TextInput style={styles.InputName} placeholder="E-mail" />
  <TextInput style={styles.InputName} placeholder="Senha" />
  <TextInput style={styles.InputName} placeholder="Confirmar senha" />

        </View>
          </View>
    );
  }