import { styles } from "./src/Styles/styles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Importando Páginas
import TelaBoasVindas from "./src/pages/TelaBoasVindas";
import TelaLogin from "./src/pages/TelaLogin";
import TelaCadastro from "./src/pages/TelaCadastro"

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Inicio" component={TelaBoasVindas} />
      <Tab.Screen name="Login" component={TelaLogin} />
      <Tab.Screen name="Cadastro" component={TelaCadastro} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}