import { Text, View, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../colors";

export function Header({ navigation }) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>FLOATCASH</Text>

            <TouchableOpacity onPress={() => navigation.navigate("sidebar")}>
                <MaterialIcons name="menu" color={colors.primary1} size={30} />
            </TouchableOpacity>
        </View>
    );
}
