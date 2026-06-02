import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

type Role = 'admin' | 'user';

interface Props {
  defaultSelection: Role;
  setSelection: (value: Role) => void;
}

export default function CustomDropdownList({
  defaultSelection,
  setSelection,
}: Props) {
  return (
    <View style={styles.container}>
      <Picker
        selectedValue={defaultSelection}
        onValueChange={(value: Role) => setSelection(value)}
      >
        <Picker.Item label="Admin" value="admin" />
        <Picker.Item label="common" value="common" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  }
})