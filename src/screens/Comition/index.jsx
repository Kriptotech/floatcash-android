import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

import styles from "./styles";
import { Header } from "../../components/Header";
import { useEffect, useState } from "react";

export function Comition({ navigation, route }) {
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
                            do agente responsavel por esta comissão
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.strong}>
                            Detalhes desta comissão:
                        </Text>

                        <Text style={styles.p}>Comissão feita por: </Text>
                        <Text style={styles.main_text}>{data?.maker}</Text>
                        <Text style={styles.p}>Valor da comissão: </Text>
                        <Text style={styles.main_text}>
                            {data?.comition_value}MTs
                        </Text>
                        <Text style={styles.p}>Comissão do tipo: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_format === "dayly"
                                ? "Diaria"
                                : "Semanal"}
                        </Text>
                        <Text style={styles.p}>Comissão de: </Text>
                        <Text style={styles.main_text}>
                            {data?.request_from === "emola" ? "Emola" : "Mpesa"}
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
