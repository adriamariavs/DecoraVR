import React, { useState, useEffect } from "react";
import { Text, View, Animated, ImageBackground, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import Index from "./src/rotas/Index";
import { styles } from "./src/Styles/styles";

export default function App() {
  const [start, setStart] = useState(false);
  const [heightValue] = useState(new Animated.Value(1000));

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        Animated.timing(heightValue, {
          toValue: 0,
          duration: 5000,
          useNativeDriver: false,
        }).start();
      }, 2000);
    }
  }, [start, heightValue]);

  const [fontsLoaded] = useFonts({
    CrimsonText: require("./src/assets/Fonts/CrimsonText-Bold.ttf"),
    CrimsonTextFina: require("./src/assets/Fonts/CrimsonText-Regular.ttf"),
    Dosis: require("./src/assets/Fonts/Dosis-VariableFont_wght.ttf"),
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
        <View style={{ flex: 1 }}>
          <ImageBackground
            source={require("./src/image/TelaBoas-Vindas.png")}
            style={styles.ImgBoasVindas}
          >
            <View style={{ flex: 1, alignItems: "right"}}>
            <View style={{ width: "100%", heigth: "100%", left: "20%", top: "18%"}}>
              <Text style={styles.text1}>MAKE YOUR</Text>
              <Text style={styles.text2}>HOME BEAUTIFUL</Text>
              <Text style={styles.text3}>The best simple place where you</Text>
              <Text style={styles.text4}>discover most wonderful</Text>
              <Text style={styles.text5}>furnitures and make your home</Text>
              <Text style={styles.text6}>beautiful.</Text>

              <TouchableOpacity
                style={styles.BtnHome}
                onPress={() => setStart(true)}
              >
                <Text style={styles.btnText}>Get Started</Text>
              </TouchableOpacity>
            </View>
            </View>
          </ImageBackground>
        </View>
      )}
    </>
  );
}
