import { TouchableOpacity, View, Text, StyleSheet } from "react-native";


interface Props{

    textButton: string;

    onPress: ()=> void;


}


export default function CustomButton(props: Props){

    const {textButton, onPress} = props;

    return(
        <View>
        
            <TouchableOpacity onPress={onPress} style={style.button}>

                <Text style={style.textButton}>{textButton}</Text>

            </TouchableOpacity>
        
        </View>
    )


}


const style = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#b2f0ff',
        width: 300,
    },
    textButton: {
        fontSize: 18,
        textAlign: 'center'
    }
})