import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabsNavigator from "./TabsNavigator";
import LoginScreen from "../screens/LoginScreen";

export type RootStackParamList = {
  Login: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Tabs" component={TabsNavigator} />
    </Stack.Navigator>
  );
}
