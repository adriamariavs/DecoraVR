import React, { useEffect, useRef } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

import {
  View,
  Text,
  TextInput,
  Animated,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { styles } from "../Styles/styles";

export default function TelaLogin() {
  const slideAnim = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <ImageBackground
      source={require("../image/TelaBoas-Vindas.png")}
      style={styles.ImgBoasVindas}
    >
      <TouchableOpacity><AntDesign name="rightcircle" size={30} color="black" top={40} /></TouchableOpacity>
      <Animated.View
        style={[styles.ViewLogin, { transform: [{ translateY: slideAnim }] }]}
      >
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
          <Text style={styles.ButtonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.TextoOr}>Or</Text>

        <View style={styles.IconContainer}>
          <TouchableOpacity><AntDesign name="google" size={30} color="black" top={40} /></TouchableOpacity>
          <TouchableOpacity><Entypo name="facebook" size={30} color="black" top={40} style={{ marginLeft: 60 }} /></TouchableOpacity>
          <TouchableOpacity><AntDesign name="apple1" size={30} color="black" top={40} style={{ marginLeft: 60 }}/></TouchableOpacity>
        </View>

        <View style={styles.SignUpContainer}>
          <Text style={styles.TextoEmail2}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.SignUp}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </ImageBackground>
  );
}
