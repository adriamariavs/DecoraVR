import React, { useEffect, useRef } from 'react';
import { View, Text, TextInput, Animated, ImageBackground } from 'react-native';
import { styles } from '../Styles/styles';

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
    <Animated.View style={[styles.ViewLogin, { transform: [{ translateY: slideAnim }] }]}>
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


