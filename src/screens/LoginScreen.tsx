import { View, Text, StyleSheet } from "react-native";
import CustomDropdownList from "../components/CustomDropdownList";
import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import CustomButton from "../components/CustomButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

export default function LoginScreen({ navigation }: Props) {
  const [roleUser, setRoleUser] = useState<"admin" | "user">("user");

  const { setRole } = useAuth();

  const handleLogin = () => {
    setRole(roleUser);

    navigation.navigate("Tabs");
  };

  return (
    <View style={styles.container}>
      <Text>Seleccione como desea ingresar:</Text>

      <View style={styles.dropdownList}>
        <CustomDropdownList
          defaultSelection={roleUser}
          setSelection={setRoleUser}
        />
      </View>

      <CustomButton textButton="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dropdownList: {
    width: 200,
    height: 200
  }
});
