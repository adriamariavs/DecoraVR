import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./src/style/Styles";

// Importa as páginas do aplicativo
import TelaLogin from "./src/pages/TelaLogin";
import TelaCadastro from "./src/pages/TelaCadastro";
// Importa o componente de drawer personalizado
import CustomDrawer from "./src/componentes/CustomDrawer";

// Importa a função useFonts da biblioteca expo-font para carregar fontes personalizadas
import { useFonts } from "expo-font";

// Cria uma instância do Drawer Navigator
const Drawer = createDrawerNavigator();

export default function App() {
  // Carrega a fonte personalizada "TitanOne-Regular"
  const [fonstLoaded] = useFonts({
    "CrimsonText-Bold": require("./src/assets/Fonts/CrimsonText-Bold.ttf"),
  });

  const [fonstLoaded2] = useFonts({
    "CrimsonText-Regular": require("./src/assets/Fonts/CrimsonText-Regular.ttf"),
  });

  // Se as fontes não foram carregadas ainda, retorna undefined
  if (!fonstLoaded2) {
    return undefined;
  }

  if (!fonstLoaded) {
    return undefined;
  }

  return (
    <NavigationContainer>
      <Drawer.Navigator
        // Define o componente de conteúdo personalizado para o drawer
        drawerContent={CustomDrawer}
        // Define a rota inicial como "Menu"
        initialRouteName="TelaCadastro"
        // Configura as opções das telas no drawer
        screenOptions={{
          drawerActiveTintColor: "black", // Cor do texto do item ativo no drawer
          drawerActiveBackgroundColor: "#d4a57b", // Cor de fundo do item ativo no drawer
        }}
      >
        {/* Define a tela "Menu" no drawer */}
        <Drawer.Screen
          name="TelaCadastro"
          component={TelaCadastro}
          options={{
            headerStyle: { backgroundColor: "#d4a57b" }, // Estilo do cabeçalho da tela "Menu"
          }}
        />
        {/* Define a tela "Login" no drawer */}
        <Drawer.Screen name="TelaLogin" component={TelaLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}