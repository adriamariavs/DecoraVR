import { styles } from "./src/Styles/styles";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Importando Páginas
import TelaBoasVindas from "./src/pages/TelaBoasVindas";

const Tab = createBottomTabNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Inicio" component={TelaBoasVindas} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}