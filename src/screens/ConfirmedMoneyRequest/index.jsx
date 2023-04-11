import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";

export function ConfirmedMoneyRequest({ navigation, route }) {
    const [agentData, setAgentData] = useState({});
    let data = route.params;

    async function getAgentData() {
        let server_url = await AsyncStorage.getItem("server_url");

        let obj = {
            data: {
                id: data?.maker_id,
            },
        };

        await fetch(`${server_url}/users/single`, {
            method: "POST",
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAgentData(data?.result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getAgentData();
    }, []);

    return (
        <View style={styles.profile_container}>
            <Header navigation={navigation} />

            <ScrollView>
                <View style={styles.box_container}>
                    <View style={styles.box}>
                        <Text style={styles.strong}>Atenção</Text>

                        <Text style={styles.p}>
                            Clique no butão abaixo para poder ver as informações
                            do agente responsavel por esta requisição
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.strong}>
                            Detalhes desta requisição de dinheiro/float:
                        </Text>

                        <Text style={styles.p}>Requisição de: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_type}
                        </Text>
                        <Text style={styles.p}>Requisição feita por: </Text>
                        <Text style={styles.main_text}>{data?.maker}</Text>
                        <Text style={styles.p}>Valor da requisição: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_value}MT
                        </Text>
                        <Text style={styles.p}>
                            Numero do agente/operador que receberá o valor da
                            requisição:{" "}
                        </Text>
                        <Text style={styles.main_text}>
                            {data?.number_to_receive}
                        </Text>
                        <Text style={styles.p}>Requisição de: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_from === "emola" ? "Emola" : "Mpesa"}
                        </Text>
                        <Text style={styles.p}>
                            Valor que agente entregará:{" "}
                        </Text>
                        <Text style={styles.main_text}>
                            {data?.value_to_give}MT
                        </Text>
                        <Text style={styles.p}>
                            Valor que agente receberá:{" "}
                        </Text>
                        <Text style={styles.main_text}>
                            {data?.value_to_recieve}MT
                        </Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.last_item}>
                            {agentData?.username && (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() =>
                                        navigation.navigate("agent", agentData)
                                    }
                                >
                                    <MaterialIcons
                                        name="remove-red-eye"
                                        color={"#fff"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            )}

                            {/* <TouchableOpacity style={styles.button}>
                                <MaterialIcons
                                    name="delete-forever"
                                    color={"#fff"}
                                    size={40}
                                />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
