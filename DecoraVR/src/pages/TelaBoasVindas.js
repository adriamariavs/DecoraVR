import { ImageBackground, Text } from "react-native";
import { styles } from "../Styles/styles";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function TelaBoasVindas () {
  return (
    <ImageBackground source={require("../image/TelaBoas-Vindas.png")} 
     style={(styles.ImgBoasVindas)} >

     <View>
     <Text style={{ fontSize: 30 }}>
     MAKE YOUR
     </Text>
     </View>

    </ImageBackground>
  )
}