import { ImageBackground, Text } from "react-native";
import { styles } from "../Styles/styles";
import { View } from "react-native";
import { useFonts } from "expo-font";

export default function TelaBoasVindas() {
  const [fontsLoaded] = useFonts({
    CrimsonText: require("../assets/Fonts/CrimsonText-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <ImageBackground
      source={require("../image/TelaBoas-Vindas.png")}
      style={styles.ImgBoasVindas}
    >
      <View>
        <Text style={{ fontSize: 30, fontFamily: "CrimsonText" }}>
          MAKE YOUR
        </Text>
      </View>
    </ImageBackground>
  );
}
