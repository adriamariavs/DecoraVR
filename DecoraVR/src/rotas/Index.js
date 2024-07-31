import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { styles } from "../Styles/styles";

const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={TelaLogin} />
      <Tab.Screen name="Cadastro" component={TelaCadastro} />
    </Tab.Navigator>
  );
}
