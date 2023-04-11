import { Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../colors";

export function Agent({ navigation }) {
    return (
        <>
            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("dashboard")}
            >
                <MaterialIcons name="house" color={colors.primary1} size={30} />
                <Text style={styles.item_text}>Inicio</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("register_comition")}
            >
                <MaterialIcons
                    name="plus-one"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>Lançar comissão</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("request_money")}
            >
                <MaterialIcons
                    name="request-page"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>Requsitar dinheiro/float</Text>
            </TouchableOpacity>
        </>
    );
}
