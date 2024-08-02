import { View, Text, TextInput, ImageBackground } from "react-native";
import { styles } from "../Styles/styles";

export default function TelaCadastro() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../image/TelaBoas-Vindas.png")}
       style={styles.ImgBoasVindas}
      >
        <View style={styles.TelaCadastro}>
          <Text style={styles.Welcome}>Seja bem-vindo!</Text>

          <TextInput style={styles.InputName} placeholder="Nome completo" />
          <TextInput style={styles.InputName} placeholder="E-mail" />
          <TextInput
            style={styles.InputName}
            placeholder="Senha"
            secureTextEntry
          />
          <TextInput
            style={styles.InputName}
            placeholder="Confirmar senha"
            secureTextEntry
          />
        </View>
      </ImageBackground>
    </View>
  );
}
