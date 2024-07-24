import { styles } from "./src/Styles/styles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect } from "react";
// Import fonts
import { useFonts } from "expo-font";
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//Importando Páginas
import TelaBoasVindas from "./src/pages/TelaBoasVindas";
import TelaLogin from "./src/pages/TelaLogin";
import TelaCadastro from "./src/pages/TelaCadastro"



export default function App() {
  const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
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
  }, []);

  

  return (
    <>
      {start ? (
        <View style={{ flex: 1 }}>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
          }}
        >
             <ImageBackground
            source={require("../DecoraVR/src/image/TelaBoas-Vindas.png")}
            style={styles.ImgBoasVindas}
          >
            <View>
              <Text 
                style={{ 
                  fontSize: 24, 
                  fontFamily: "CrimsonTextFina", 
                  marginLeft: 'auto', 
                  marginTop: 150, 
                  marginRight: 10, 
                }}
              >
           MAKE YOUR
              </Text>

              <Text 
              style={{ 
                  fontSize: 24, 
                  fontFamily: "CrimsonText", 
                  marginLeft: 'auto', 
                  marginRight: 3, 
                  marginTop: -10 
                }}
             >
           HOME BEAUTIFUL
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Dosis",
                  marginLeft: "auto",
                  marginRight: 3,
                  marginTop: 20,
                }}
              >
         The best simple place where you
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Dosis",
                  marginLeft: "auto",
                  marginRight: 3,
                }}
              >
                discover most wonderful
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Dosis",
                  marginLeft: "auto",
                  marginRight: 3,
                }}
              >
                furnitures and make your home
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Dosis",
                  marginLeft: "auto",
                  marginRight: 3,
                }}
              >
                beautiful.
              </Text>
              
              
          
             <TouchableOpacity
               style={styles.BtnHome}
               onPress={() => navigation.navigate('Login')} 
             >
               <Text> GET STARTED! </Text>
             </TouchableOpacity>
         
            </View>3
            

          </ImageBackground>
          <NavigationContainer>
            <Tab.Navigator>
              <Tab.Screen name="Inicio" component={TelaBoasVindas} />
              <Tab.Screen name="Login" component={TelaLogin} />
              <Tab.Screen name="Cadastro" component={TelaCadastro} />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      )}
    </>
  );
}}
