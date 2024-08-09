import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from '@expo/vector-icons/Entypo';

import TelaCadastro from "../pages/TelaCadastro";
import TelaLogin from "../pages/TelaLogin";
import TelaCatálogo from "../pages/TelaCatálogo";
import TelaCarrinho from "../pages/TelaCarrinho";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login " component={TelaLogin} />
        <Tab.Screen name="Cadastro" component={TelaCadastro} />
        <Tab.Screen  name="Catálogo" component={TelaCatálogo} />
        <Tab.Screen  name="Carrinho" component={TelaCarrinho} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
