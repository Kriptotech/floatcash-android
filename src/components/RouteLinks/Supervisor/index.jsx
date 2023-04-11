import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../../colors";

export function Supervisor({ navigation }) {
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
                onPress={() => navigation.navigate("register_agent")}
            >
                <MaterialIcons
                    name="person-add"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>Registrar Agente</Text>
            </TouchableOpacity>
            {/* 
            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("see_agents")}
            >
                <MaterialIcons
                    name="remove-red-eye"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>Ver Agentes</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
                style={styles.item}
                onPress={() =>
                    navigation.navigate("not_confirmed_money_requests")
                }
            >
                <MaterialIcons
                    name="monetization-on"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>
                    Requisições de float/dinheiro não confirmadas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("confirmed_money_requests")}
            >
                <MaterialIcons
                    name="monetization-on"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>
                    Requisições de float/dinheiro confirmadas
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("not_confirmed_comitions")}
            >
                <MaterialIcons
                    name="view-list"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>Comissões não confirmadas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.item}
                onPress={() => navigation.navigate("comitions")}
            >
                <MaterialIcons
                    name="view-list"
                    color={colors.primary1}
                    size={30}
                />
                <Text style={styles.item_text}>Comissões confirmadas</Text>
            </TouchableOpacity>
        </>
    );
}
