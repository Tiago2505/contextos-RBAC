import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuth } from "../contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

export type TabsParamList = {
  Settings: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();


export default function TabsNavigator() {
  const {role} = useAuth();
  return (
    <Tab.Navigator initialRouteName={role === 'admin' ? 'Settings' : 'Home'}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      {role==='admin' && <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />}
    </Tab.Navigator>
  );
}
