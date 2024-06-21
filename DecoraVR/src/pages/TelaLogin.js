import { View, Text, TextInput, ImageBackground, Animated } from "react-native"
import { styles } from "../Styles/styles";
import { useState } from "react";

export default function Login() {

    const [altura, setAltura] = useState(new Animated.Value(0));

    Animated.sequence([
     Animated.timing(
        altura,
        {
            toValue: 500,
            duration: 2000
        }
     )
    ]).start();

    return (
    <ImageBackground source={require("../image/TelaBoas-Vindas.png")}
    style={styles.ImgBoasVindas}
    >
    
    <Animated.View style={{
        width: '100%',
        height: altura,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EDE9E4',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        }}>

    <Text style={styles.Welcome}>Seja bem-vindo!</Text>
    <TextInput style={styles.InputName} placeholder="E-mail" />
    <TextInput
    style={styles.InputName}
    placeholder="Senha"
    secureTextEntry={true}
    />

    </Animated.View>
    </ImageBackground>
    );
  }