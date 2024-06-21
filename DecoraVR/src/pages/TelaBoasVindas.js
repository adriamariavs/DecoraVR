import { ImageBackground, Text } from "react-native";
import { styles } from "../Styles/styles";
import { View } from "react-native";
import { useFonts } from "expo-font";

export default function TelaBoasVindas() {
  const [fontsLoaded] = useFonts({
    CrimsonText: require("../assets/Fonts/CrimsonText-Bold.ttf"),
  });

  const [fontsLoaded2] = useFonts({
    CrimsonTextFina: require("../assets/Fonts/CrimsonText-Regular.ttf"),
  });

  const [fontsLoaded3] = useFonts({
    Dosis: require("../assets/Fonts/Dosis-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  if (!fontsLoaded2) {
    return undefined;
  }

  if (!fontsLoaded3) {
    return undefined;
  }

  return (
    <ImageBackground
      source={require("../image/TelaBoas-Vindas.png")}
      style={styles.ImgBoasVindas}
    >
      <View>
        <Text style={{ 
          fontSize: 30, 
          fontFamily: "CrimsonTextFina", 
          marginLeft: 'auto', 
          marginTop: 100, 
          marginRight: 10, }}>
          MAKE YOUR
        </Text>

        <Text style={{ 
          fontSize: 30, 
          fontFamily: "CrimsonText", 
          marginLeft: 'auto', 
          marginRight: 5, 
          marginTop: -10 }}>
          HOME BEAUTIFUL
        </Text>

        <Text style={{ 
          fontSize: 18, 
          fontFamily: "Dosis", 
          marginLeft: 'auto', 
          marginRight: 10, 
          marginTop: 20 }}>
          The best simple place where you
        </Text>

        <Text style={{ 
          fontSize: 18, 
          fontFamily: "Dosis", 
          marginLeft: 'auto', 
          marginRight: 10 }}>
          discover most wonderful
        </Text>

        <Text style={{ 
          fontSize: 18, 
          fontFamily: "Dosis", 
          marginLeft: 'auto', 
          marginRight: 10 }}>
          furnitures and make your home
        </Text>
        
        <Text style={{ 
          fontSize: 18, 
          fontFamily: "Dosis", 
          marginLeft: 'auto', 
          marginRight: 10 }}>
          beautiful.
        </Text>
      
      </View>
    </ImageBackground>
  );
}