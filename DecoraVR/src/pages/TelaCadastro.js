import React, { useEffect, useRef } from "react";
import { ScrollView } from "react-native";
import {View,Text,TextInput,Animated,ImageBackground,TouchableOpacity} from "react-native";
import { styles } from "../Styles/styles";

export default function TelaCadastro() {
    const slideAnim = useRef(new Animated.Value(100)).current;
  
    useEffect(() => {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [slideAnim]);
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../image/TelaBoas-Vindas.png")}
        style={styles.ImgBoasVindas}
      >
         <Animated.View
        style={[styles.ViewLogin, { transform: [{ translateY: slideAnim }] }]}
      >
        <View style={styles.TelaCadastro}>
          
        <Text style={styles.TextoEmail}>Name</Text>
          <TextInput
            style={styles.InputName}
            placeholder="Confirmar senha"
            secureTextEntry
          />
        <Text style={styles.TextoEmail}>E-mail Address</Text>
        <TextInput
          style={styles.InputName}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <Text style={styles.TextoEmail}>Password</Text>
        <TextInput
          style={styles.InputName}
          placeholder="Senha"
          secureTextEntry={true}
        />
         

          <TouchableOpacity style={styles.ButtonContainer}>
            <Text style={styles.ButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        </Animated.View>
      </ImageBackground>
    </View>
  );
}
