import { View, Text, StyleSheet } from "react-native";



export default function SettingScreen(){

    return (

        <View>

            <Text style={styles.text}>Estas en settings</Text>


        </View>

    )


}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        textAlign: 'center'
    }
})