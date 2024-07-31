import React, { useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { Text, View, TouchableOpacity, Animated, ImageBackground } from "react-native";
import Index from "./src/routes";
import { styles } from "../Styles/styles";

export default function App() {
  const [start, setStart] = useState(false);
  const [heightValue] = useState(new Animated.Value(1000));

  // Função para iniciar a animação quando o componente é montado
  useEffect(() => {
    setTimeout(() => {
      Animated.timing(heightValue, {
        toValue: 0, // Defina o valor final da altura aqui
        duration: 5000,
        useNativeDriver: false, // `useNativeDriver` não é suportado para animações de layout
      }).start();
    }, 2000);
  }, [start]);

  const [fontsLoaded] = useFonts({
    "CrimsonText: require("../assets/Fonts/CrimsonText-Bold.ttf"),
    "CrimsonTextFina: require("../assets/Fonts/CrimsonText-Regular.ttf"),
    "Dosis: require("../assets/Fonts/Dosis-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {start ? (
        <View style={{ flex: 1 }}>
          <Index />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
          <ImageBackground
            source={require("../image/TelaBoas-Vindas.png")}
            style={styles.ImgBoasVindas}
          >
            <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "CrimsonTextFina",
            marginLeft: "auto",
            marginTop: 100,
            marginRight: 10,
          }}
        >
          MAKE YOUR
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontFamily: "CrimsonText",
            marginLeft: "auto",
            marginRight: 5,
            marginTop: -10,
          }}
        >
          HOME BEAUTIFUL
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Dosis",
            marginLeft: "auto",
            marginRight: 10,
            marginTop: 20,
          }}
        >
          The best simple place where you
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Dosis",
            marginLeft: "auto",
            marginRight: 10,
          }}
        >
          discover most wonderful
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Dosis",
            marginLeft: "auto",
            marginRight: 10,
          }}
        >
          furnitures and make your home
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Dosis",
            marginLeft: "auto",
            marginRight: 10,
          }}
        >
          beautiful.
        </Text>
          </ImageBackground>
        </View>
    </>
  );
}