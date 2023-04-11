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

export function NotConfirmedMoneyRequest({ navigation, route }) {
    let data = route.params;
    const [isLoading, setIsLoading] = useState(false);

    async function confirmMoneyReqquest() {
        let server_url = await AsyncStorage.getItem("server_url");

        let obj = {
            data: {
                id: data.id,
            },
        };

        setIsLoading(true);

        await fetch(`${server_url}/money_requests/confirm_money_request`, {
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
                    setIsLoading(false);
                    return Toast.show({
                        type: "error",
                        text1: "Erro!",
                        text2: "Erro ao confirmar requisição de dinheiro/float",
                        position: "bottom",
                        bottomOffset: 200,
                    });
                }
                if (data.result.affectedRows == 0) {
                    setIsLoading(false);
                    return Toast.show({
                        type: "error",
                        text2: "Erro",
                        text2: "A requisição de dinheiro/float já foi confirmada!",
                        position: "bottom",
                        bottomOffset: 200,
                    });
                }
                if (data.result.affectedRows != 0) {
                    setIsLoading(false);
                    return Toast.show({
                        type: "success",
                        text1: "Sucesso!",
                        text2: data?.message,
                        position: "bottom",
                        bottomOffset: 200,
                    });
                }
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                return Toast.show({
                    type: "error",
                    text1: "Erro!",
                    text2: "Erro ao confirmar a requisição de dinheiro/float",
                    position: "bottom",
                    bottomOffset: 200,
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
                        <Text style={styles.strong}>Atenção</Text>

                        <Text style={styles.p}>
                            Quando for confirmar, certifique-se primeiro de
                            enviar o dinheiro ao agente e depois confirmar a
                            requisição:{" "}
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.strong}>
                            Detalhes desta requisição de dinheiro/float não
                            confirmada:
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
                            {!isLoading ? (
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => confirmMoneyReqquest()}
                                >
                                    <MaterialIcons
                                        name="check"
                                        color={"#fff"}
                                        size={40}
                                    />
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.button}>
                                    <ActivityIndicator
                                        color={"#fff"}
                                        size={"large"}
                                    />
                                </View>
                            )}
                        </View>
                    </View>

                    <Toast />
                </View>
            </ScrollView>
        </View>
    );
}
