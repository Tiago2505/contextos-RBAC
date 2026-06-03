import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { TabsParamList } from "../navigation/TabsNavigator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useAuth } from "../contexts/AuthContext";

type Props = NativeStackScreenProps<TabsParamList, "Home">;

export default function HomeScreen(props: Props) {

    const {navigation} = props;

    const {logout} = useAuth();

  return (
    <View style={styles.container}>
      <CustomButton textButton={"Logout"} onPress={() => logout(navigation)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center'
  }
})