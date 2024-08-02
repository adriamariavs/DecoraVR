import { View, Text, TextInput} from "react-native";
import { ScrollView } from "react-native";
import { styles } from "../Styles/styles";

export default function TelaCatálogo() {
  return (
    <View style={{flex: 1, flexDirection: 'row', backgroundColor: "white",}}>
    <ScrollView>
    <View style={styles.ViewCatálogo1}>
    <Text style={styles.TitleCatalogo1}>Find modern</Text>
    <Text style={styles.TitleCatalogo2}>furniture for you</Text>
    <TextInput style={styles.TextInput}>Pesquisar...</TextInput>
    </View>
    </ScrollView>
    </View>
  );
}
