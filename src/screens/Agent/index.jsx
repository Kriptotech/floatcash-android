import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";
import { useState } from "react";

export function Agent({ navigation, route }) {
    const [isLoading, setIsLoading] = useState(false);
    let data = route.params;

    async function deleteUser() {
        let server_url = await AsyncStorage.getItem("server_url");

        let obj = {
            data: {
                id: data.id,
            },
        };

        setIsLoading(true);

        await fetch(`${server_url}/users/delete`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsLoading(false);

                if (data.success == false) {
                    return Toast.show({
                        type: "error",
                        text1: "Erro!",
                        text2: "Erro ao deletar agente",
                    });
                }
                if (data.result.affectedRows == 0)
                    return Toast.show({
                        type: "error",
                        text1: "O usuario já foi deletado!",
                        text2: data?.message,
                    });
                if (data.result.affectedRows != 0)
                    return Toast.show({
                        type: "success",
                        text1: "Sucesso!",
                        text2: data?.message,
                    });
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao deletar agente",
                });
            });

        setIsLoading(false);
    }

    return (
        <View style={styles.profile_container}>
            <Header navigation={navigation} />

            <ScrollView>
                <View style={styles.box_container}>
                    <View style={styles.box}>
                        <View style={styles.user}>
                            <MaterialIcons
                                name="account-circle"
                                color="#333"
                                size={40}
                            />
                        </View>

                        <Text style={styles.strong}>
                            Nome do agente: {data.username}
                        </Text>

                        <Text style={styles.p}>
                            Nome do operador do agente:{" "}
                        </Text>
                        <Text style={styles.main_text}>
                            {data.operator_name}
                        </Text>
                        <Text style={styles.p}>celular do agente: </Text>
                        <Text style={styles.main_text}>
                            {data.agent_phone_number}
                        </Text>
                        <Text style={styles.p}>celular do operador: </Text>
                        <Text style={styles.main_text}>
                            {data.operator_phone_number}
                        </Text>
                        <Text style={styles.p}>codigo de agente Mpesa : </Text>
                        <Text style={styles.main_text}>
                            {data.mpesa_agent_code}
                        </Text>
                        <Text style={styles.p}>codigo de agente Emola : </Text>
                        <Text style={styles.main_text}>
                            {data.emola_agent_code}
                        </Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.strong}>Atenção</Text>

                        <Text style={styles.p}>
                            Clique no butão abaixo para deletar este agente
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.last_item}>
                            {isLoading === false ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => deleteUser()}
                                >
                                    <MaterialIcons
                                        name="delete-forever"
                                        color={"#fff"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity style={styles.button}>
                                    <ActivityIndicator
                                        size="large"
                                        color="#fff"
                                    />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    <Toast />
                </View>
            </ScrollView>
        </View>
    );
}
