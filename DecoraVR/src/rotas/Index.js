import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from "../Styles/styles";

import TelaCadastro from "../pages/TelaCadastro";
import TelaLogin from "../pages/TelaLogin";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Login" component={TelaLogin} />
      <Tab.Screen name="Cadastro" component={TelaCadastro} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
