import { Text, View, TouchableOpacity, Linking } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "../../../colors";

export function Content({
    setModalOpened,
    username,
    operator_name,
    user_type,
    emola_agent_code,
    agent_phone_number,
    mpesa_agent_code,
    operator_phone_number,
    logOut,
}) {
    return (
        <View style={styles.box_container}>
            {username != null && (
                <View style={styles.box}>
                    <View style={styles.user}>
                        <MaterialIcons
                            name="account-circle"
                            color="rgb(30, 151, 231)"
                            size={40}
                        />
                    </View>

                    <Text style={styles.strong}>
                        {username} |{" "}
                        {user_type == "admin"
                            ? "Administrador"
                            : user_type == "agent"
                            ? "Agente"
                            : "Supervisor de agentes"}
                    </Text>
                    <Text style={styles.strong}>Detalhes desta conta</Text>

                    {operator_name && operator_name != "null" && (
                        <Text style={styles.p}>
                            Nome do operador: {operator_name}
                        </Text>
                    )}
                    {operator_phone_number &&
                        operator_phone_number != "null" && (
                            <Text style={styles.p}>
                                Celular do operador: {operator_phone_number}
                            </Text>
                        )}
                    <Text style={styles.p}>
                        Celular pessoal: {agent_phone_number}
                    </Text>
                    {mpesa_agent_code && mpesa_agent_code != "null" && (
                        <Text style={styles.p}>
                            Codigo do agente Mpesa: {mpesa_agent_code}
                        </Text>
                    )}
                    {emola_agent_code && emola_agent_code != "null" && (
                        <Text style={styles.p}>
                            Codigo do agente Emola: {emola_agent_code}
                        </Text>
                    )}
                </View>
            )}

            {username != null && (
                <View style={styles.row}>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => Linking.openURL("sms:+258864660991")}
                    >
                        <Text style={styles.row_p}>Suporte tecnico</Text>
                        <MaterialIcons
                            name="support-agent"
                            color={colors.primary1}
                            size={40}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => Linking.openURL("tel:+258864660991")}
                    >
                        <Text style={styles.row_p}>Contactar Suporte</Text>
                        <MaterialIcons
                            name="warning"
                            color={colors.primary1}
                            size={40}
                        />
                    </TouchableOpacity>

                    <View style={styles.last_item}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => setModalOpened(true)}
                        >
                            <MaterialIcons
                                name="settings"
                                color={"#fff"}
                                size={30}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => logOut()}
                        >
                            <MaterialIcons
                                name="logout"
                                color={"#fff"}
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
}
